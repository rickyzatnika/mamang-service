"use client";

import { useFormContext } from "react-hook-form";
import { DEVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function StepDevice() {
  const { watch, setValue } = useFormContext();
  const selectedDevice = watch("device");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {DEVICE_OPTIONS.map((option) => {
          const isSelected = selectedDevice === option.id;
          const Icon = option.icon;

          return (
            <motion.button
              key={option.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setValue("device", option.id, { shouldValidate: true })}
              className={cn(
                "relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer",
                isSelected
                  ? "border-[#22C55E] bg-[#22C55E]/5"
                  : "border-[#E5E7EB] bg-white hover:border-[#22C55E]/30"
              )}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl",
                  isSelected ? "bg-[#22C55E]/10" : "bg-[#F1F5F9]"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6",
                    isSelected ? "text-[#22C55E]" : "text-[#94A3B8]"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm font-medium",
                  isSelected ? "text-[#22C55E]" : "text-[#0F172A]"
                )}
              >
                {option.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
