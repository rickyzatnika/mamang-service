"use client";

import { motion, AnimatePresence } from "motion/react";
import { TOTAL_STEPS, MOTIVATIONAL_MESSAGES, ESTIMATED_TIMES } from "@/lib/constants";

interface ProgressHeaderProps {
  currentStep: number;
}

export function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="w-full max-w-[640px] mb-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-[#0F172A]">
          Step {currentStep + 1} of {TOTAL_STEPS}
        </p>
        <p className="text-sm text-[#94A3B8]">
          {Math.round(progress)}%
        </p>
      </div>

      <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden mb-3">
        <motion.div
          className="h-full bg-[#22C55E] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <p className="text-xs text-[#94A3B8] mb-4">
        Estimasi selesai sekitar {ESTIMATED_TIMES[currentStep]}
      </p>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="text-sm text-[#475569] text-center"
        >
          {MOTIVATIONAL_MESSAGES[currentStep]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
