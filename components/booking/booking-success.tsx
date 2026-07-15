"use client";

import { motion } from "motion/react";
import { CheckCircle, MessageCircle, Home, RotateCcw, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
        className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <CheckCircle className="w-14 h-14 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-3">Booking Berhasil!</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Terima kasih, <strong>{customerName}</strong>. Booking Anda telah
          berhasil dibuat. Tim MaMang Service akan segera menghubungi Anda
          melalui WhatsApp.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="rounded-2xl border border-border bg-card p-6 mb-8 text-left"
      >
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Kode Booking</span>
            <span className="font-mono font-bold text-primary">{bookingCode}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium text-yellow-600">Pending</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimasi Konfirmasi</span>
            <span className="font-medium">1x24 jam</span>
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
          className={buttonVariants({ size: "lg" }) + " w-full gap-2 inline-flex"}
        >
          <MessageCircle className="w-5 h-5" />
          Chat WhatsApp
          <ExternalLink className="w-4 h-4 opacity-50" />
        </a>

        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/"
            className={buttonVariants({ variant: "outline" }) + " gap-2 inline-flex"}
          >
            <Home className="w-4 h-4" />
            Beranda
          </Link>
          <Link
            href="/booking"
            className={buttonVariants({ variant: "outline" }) + " gap-2 inline-flex"}
          >
            <RotateCcw className="w-4 h-4" />
            Booking Lagi
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
