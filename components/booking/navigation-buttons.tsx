"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
import { motion } from "motion/react";

interface NavigationButtonsProps {
  currentStep: number;

  onPrev: () => void;
  onNext: () => void;
  isLastStep?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export function NavigationButtons({
  currentStep,
  onPrev,
  onNext,
  isLastStep,
  isLoading,
  disabled,
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between mt-8 gap-4">
      {currentStep > 0 ? (
        <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Sebelumnya
          </Button>
        </motion.div>
      ) : (
        <div />
      )}

      <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="button"
          onClick={isLastStep ? onNext : onNext}
          disabled={disabled || isLoading}
          className="gap-2 min-w-[160px]"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isLastStep ? (
            <>
              <Send className="w-4 h-4" />
              Booking Sekarang
            </>
          ) : (
            <>
              Selanjutnya
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
