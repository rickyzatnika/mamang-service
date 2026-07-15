"use client";

import Image from "next/image";
import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/booking-wizard";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="flex flex-col items-center mb-8">
        <Image src="/logo.png" alt="MaMang Service" width={48} height={48} className="rounded-xl mb-4" />
        <h1 className="text-lg font-bold text-[#0F172A]">Booking Service</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Mager Keluar? MaMang yang Datang.</p>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#22C55E]" />
          </div>
        }
      >
        <BookingWizard />
      </Suspense>
    </div>
  );
}
