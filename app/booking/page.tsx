import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/booking-wizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking | MaMang Service",
  description: "Booking teknisi service onsite MaMang Service",
};

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      }
    >
      <BookingWizard />
    </Suspense>
  );
}
