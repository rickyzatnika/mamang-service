"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  onPrev: () => void;
  onNext: () => void;
  isLastStep?: boolean;
  isLoading?: boolean;
}

export function NavigationButtons({
  currentStep,
  onPrev,
  onNext,
  isLastStep,
  isLoading,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <motion.button
        type="button"
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        disabled={isLoading}
        className="w-full h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-base flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : isLastStep ? (
          <>
            <Send className="w-5 h-5" />
            Booking Sekarang
          </>
        ) : (
          <>
            Selanjutnya
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </motion.button>

      {currentStep > 0 && (
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={onPrev}
          className="w-full h-12 rounded-full text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] font-medium text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Sebelumnya
        </motion.button>
      )}
    </div>
  );
}
