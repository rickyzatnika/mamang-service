const GROK_API_URL = "https://api.x.ai/v1/chat/completions";
const GROK_API_KEY = process.env.GROK_API_KEY;

const MODEL_FALLBACKS = ["llama-3.3-70b-versatile", "llama-4-scout-17b-16e-instruct"];

export interface BookingData {
  bookingCode: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  district: string;
  postalCode?: string;
  googleMaps?: string;
  device: string;
  brand?: string;
  model?: string;
  deviceAge?: string;
  services: string[];
  problem: string;
  bookingDate: string;
  bookingTime: string;
  locationType: "rumah" | "kantor";
  priority: "normal" | "urgent";
  notes?: string;
  images?: string[];
}

export async function formatBookingWithAI(booking: BookingData): Promise<string> {
  if (!GROK_API_KEY) {
    return formatBookingFallback(booking);
  }

  const prompt = `Kamu adalah asisten AI untuk MaMang Service (jasa service komputer & HP panggilan). 
Format data booking ini menjadi pesan Telegram yang rapi, informatif, dan profesional.
Gunakan emoji yang sesuai. Gunakan bold dengan *teks* untuk Telegram.
Pesan harus dalam Bahasa Indonesia.

Data booking:
- Kode: ${booking.bookingCode}
- Pelanggan: ${booking.customerName}
- WhatsApp: ${booking.phone}
- Email: ${booking.email || "-"}
- Alamat: ${booking.address}, ${booking.district}, ${booking.city}${booking.postalCode ? ` ${booking.postalCode}` : ""}
- Google Maps: ${booking.googleMaps || "-"}
- Perangkat: ${booking.device}${booking.brand ? ` (${booking.brand} ${booking.model || ""})` : ""}
- Usia Perangkat: ${booking.deviceAge || "-"}
- Layanan: ${booking.services.join(", ")}
- Masalah: ${booking.problem}
- Jadwal: ${booking.bookingDate} ${booking.bookingTime}
- Tipe Lokasi: ${booking.locationType}
- Prioritas: ${booking.priority}
- Catatan: ${booking.notes || "-"}
- Foto: ${booking.images?.length || 0} foto

Format pesan Telegram yang ingin aku kirim ke admin/grup Telegram.`;

  for (const model of MODEL_FALLBACKS) {
    try {
      const response = await fetch(GROK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROK_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content:
                "Kamu adalah asisten yang ahli memformat pesan Telegram yang rapi dan profesional. Gunakan bold *teks*, emoji, dan format yang mudah dibaca. Balas HANYA dengan pesan yang sudah diformat, tanpa penjelasan tambahan.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 1024,
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        console.error(`Grok API error (${model}):`, response.status);
        continue;
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content;
      if (message) return message.trim();
    } catch (error) {
      console.error(`Grok API failed (${model}):`, error);
      continue;
    }
  }

  return formatBookingFallback(booking);
}

function formatBookingFallback(booking: BookingData): string {
  const priorityEmoji = booking.priority === "urgent" ? "🔴 URGENT" : "🟢 Normal";
  const locationEmoji = booking.locationType === "rumah" ? "🏠 Rumah" : "🏢 Kantor";

  return `🆕 *BOOKING BARU - MaMang Service*

📋 *Kode Booking:* \`${booking.bookingCode}\`

👤 *Data Pelanggan*
├ Nama: *${booking.customerName}*
├ WA: ${booking.phone}
├ Email: ${booking.email || "-"}
└ Alamat: ${booking.address}, ${booking.district}, ${booking.city}

💻 *Perangkat*
├ Tipe: ${booking.device}
├ Merek: ${booking.brand || "-"} ${booking.model || ""}
└ Usia: ${booking.deviceAge || "-"}

🔧 *Layanan:* ${booking.services.join(", ")}

❗ *Masalah:*
${booking.problem}

📅 *Jadwal*
├ Tanggal: ${booking.bookingDate}
├ Jam: ${booking.bookingTime}
├ Lokasi: ${locationEmoji}
└ Prioritas: ${priorityEmoji}

${booking.notes ? `📝 *Catatan:* ${booking.notes}` : ""}
${booking.googleMaps ? `🗺 Maps: ${booking.googleMaps}` : ""}

_Pesan ini dikirim otomatis oleh sistem MaMang Service._`;
}
