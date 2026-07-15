"use client";

import { motion } from "motion/react";
import { CheckCircle, MessageCircle, Home, RotateCcw, ExternalLink } from "lucide-react";
import Link from "next/link";

interface BookingSuccessProps {
  bookingCode: string;
  customerName: string;
  device: string;
  bookingDate: string;
  bookingTime: string;
}

export function BookingSuccess({
  bookingCode,
  customerName,
  device,
  bookingDate,
  bookingTime,
}: BookingSuccessProps) {
  const waNumber = "6282227331518";
  const waMessage = encodeURIComponent(
    `Halo MaMang Service 👋\n\nSaya ${customerName} telah melakukan booking.\n\nKode: ${bookingCode}\nDevice: ${device}\nJadwal: ${bookingDate} ${bookingTime}\n\nMohon konfirmasi. Terima kasih! 🙏`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="w-full max-w-md mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="w-20 h-20 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <CheckCircle className="w-12 h-12 text-[#22C55E]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Booking Berhasil!</h1>
        <p className="text-[#475569] mb-8 leading-relaxed">
          Terima kasih, <strong>{customerName}</strong>. Booking Anda telah
          berhasil dibuat. Tim MaMang Service akan segera menghubungi Anda
          melalui WhatsApp.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 mb-8 text-left"
      >
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[#94A3B8]">Kode Booking</span>
            <span className="font-mono font-bold text-[#22C55E]">{bookingCode}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#94A3B8]">Status</span>
            <span className="font-medium text-[#EAB308]">Pending</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#94A3B8]">Estimasi Konfirmasi</span>
            <span className="font-medium text-[#0F172A]">1x24 jam</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="space-y-3"
      >
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-base flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat WhatsApp
          <ExternalLink className="w-4 h-4 opacity-50" />
        </a>

        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/"
            className="h-12 rounded-full border border-[#E5E7EB] text-[#475569] hover:bg-[#F1F5F9] font-medium text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            Beranda
          </Link>
          <Link
            href="/booking"
            className="h-12 rounded-full border border-[#E5E7EB] text-[#475569] hover:bg-[#F1F5F9] font-medium text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Booking Lagi
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
