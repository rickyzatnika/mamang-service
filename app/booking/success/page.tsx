"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BookingSuccess } from "@/components/booking/booking-success";

function SuccessContent() {
  const searchParams = useSearchParams();

  const bookingCode = searchParams.get("code") || "MMXXXXXX";
  const customerName = searchParams.get("name") || "Customer";
  const device = searchParams.get("device") || "-";
  const bookingDate = searchParams.get("date") || "-";
  const bookingTime = searchParams.get("time") || "-";

  return (
    <BookingSuccess
      bookingCode={bookingCode}
      customerName={customerName}
      device={device}
      bookingDate={bookingDate}
      bookingTime={bookingTime}
    />
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
