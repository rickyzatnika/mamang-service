import { NextRequest, NextResponse } from "next/server";
import { formatBookingWithAI, type BookingData } from "@/lib/grok";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const booking: BookingData = await req.json();

    if (!booking.bookingCode || !booking.customerName) {
      return NextResponse.json(
        { error: "Data booking tidak lengkap" },
        { status: 400 }
      );
    }

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("TELEGRAM_TOKEN atau TELEGRAM_CHAT_ID belum di-set di .env.local");
      return NextResponse.json(
        { error: "Telegram belum dikonfigurasi" },
        { status: 500 }
      );
    }

    const message = await formatBookingWithAI(booking);

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram API error:", result);
      return NextResponse.json(
        { error: "Gagal mengirim ke Telegram", detail: result.description },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: result.result.message_id });
  } catch (error) {
    console.error("Telegram notification error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim notifikasi" },
      { status: 500 }
    );
  }
}
