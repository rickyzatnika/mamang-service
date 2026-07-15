"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

import {
  customerSchema,
  deviceSchema,
  serviceSchema,
  problemSchema,
  scheduleSchema,
} from "@/lib/validations";
import { STEP_TITLES, STEP_DESCRIPTIONS, TOTAL_STEPS } from "@/lib/constants";

import { ProgressHeader } from "./progress-header";
import { NavigationButtons } from "./navigation-buttons";
import { StepCustomer } from "./step-customer";
import { StepDevice } from "./step-device";
import { StepService } from "./step-service";
import { StepProblem } from "./step-problem";
import { StepSchedule } from "./step-schedule";
import { StepReview } from "./step-review";

const stepSchemas = [
  customerSchema,
  deviceSchema,
  serviceSchema,
  problemSchema,
  scheduleSchema,
];

const stepFields: string[][] = [
  ["customerName", "phone", "address", "city", "district"],
  ["device"],
  ["services"],
  ["problem"],
  ["bookingDate", "bookingTime", "locationType", "priority"],
  [],
];

function generateBookingCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "MM";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

async function uploadImages(images: string[]): Promise<string[]> {
  const urls: string[] = [];
  for (const image of images) {
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });
      const data = await res.json();
      if (data.url) urls.push(data.url);
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  }
  return urls;
}

const STEP_COMPONENTS = [
  StepCustomer,
  StepDevice,
  StepService,
  StepProblem,
  StepSchedule,
  StepReview,
];

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const createBooking = useMutation(api.bookings.createBooking);

  const methods = useForm({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: stepSchemas[currentStep] ? (zodResolver(stepSchemas[currentStep] as any) as any) : undefined,
    mode: "onChange",
    defaultValues: {
      customerName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      district: "",
      postalCode: "",
      googleMaps: "",
      device: "",
      services: [],
      brand: "",
      model: "",
      deviceAge: "",
      problem: "",
      images: [],
      bookingDate: "",
      bookingTime: "",
      locationType: undefined as "rumah" | "kantor" | undefined,
      priority: undefined as "normal" | "urgent" | undefined,
      notes: "",
      agreed: false as boolean,
    },
  });

  const { handleSubmit, trigger, getValues } = methods;

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  const handleNext = async () => {
    if (isLastStep) return;

    const fields = stepFields[currentStep];
    const isValid = await trigger(fields as any); // eslint-disable-line @typescript-eslint/no-explicit-any

    if (!isValid) {
      toast.error("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmitBooking = async () => {
    const values = getValues();

    if (!values.agreed) {
      toast.error("Centang konfirmasi terlebih dahulu");
      return;
    }

    setIsPending(true);
    try {
      const bookingCode = generateBookingCode();
      const imageUrls = await uploadImages((values.images as string[]) || []);

      await createBooking({
        bookingCode,
        customerName: values.customerName,
        phone: values.phone,
        email: values.email || undefined,
        address: values.address,
        district: values.district,
        city: values.city,
        postalCode: values.postalCode || undefined,
        googleMaps: values.googleMaps || undefined,
        device: values.device,
        brand: values.brand || undefined,
        model: values.model || undefined,
        deviceAge: values.deviceAge || undefined,
        services: values.services as string[],
        problem: values.problem,
        bookingDate: values.bookingDate,
        bookingTime: values.bookingTime,
        locationType: values.locationType as "rumah" | "kantor",
        priority: values.priority as "normal" | "urgent",
        notes: values.notes || undefined,
        images: imageUrls,
      });

      const params = new URLSearchParams({
        code: bookingCode,
        name: values.customerName,
        device: values.device,
        date: values.bookingDate,
        time: values.bookingTime,
      });

      toast.success("Booking berhasil dibuat!");
      router.push(`/booking/success?${params.toString()}`);
    } catch (error) {
      toast.error("Gagal menyimpan booking. Silakan coba lagi.");
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };

  const onSubmit = () => {
    // Not used - handleSubmitBooking handles final submission
  };

  const StepComponent = STEP_COMPONENTS[currentStep];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <ProgressHeader currentStep={currentStep} />

      <div className="w-full max-w-[640px] rounded-3xl shadow-xl bg-white p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#0F172A]">{STEP_TITLES[currentStep]}</h2>
              <p className="text-sm text-[#475569] mt-1">
                {STEP_DESCRIPTIONS[currentStep]}
              </p>
            </div>

            <FormProvider {...methods}>
              {isLastStep ? (
                <div>
                  <StepComponent />
                  <NavigationButtons
                    currentStep={currentStep}
                    onPrev={handlePrev}
                    onNext={handleSubmitBooking}
                    isLastStep={true}
                    isLoading={isPending}
                  />
                </div>
              ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <form onSubmit={handleSubmit(onSubmit as any)}>
                  <StepComponent />
                  <NavigationButtons
                    currentStep={currentStep}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    isLastStep={false}
                    isLoading={isPending}
                  />
                </form>
              )}
            </FormProvider>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
