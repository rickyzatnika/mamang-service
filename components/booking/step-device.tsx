"use client";

import { useFormContext } from "react-hook-form";
import { DEVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Lightbulb, Check } from "lucide-react";

export function StepDevice() {
  const { watch, setValue } = useFormContext();
  const selectedDevice = watch("device");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              )}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                >
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </motion.div>
              )}
              <div
                className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-xl transition-colors",
                  isSelected ? "bg-primary/10" : "bg-muted"
                )}
              >
                <Icon
                  className={cn(
                    "w-7 h-7 transition-colors",
                    isSelected ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {option.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
        <Lightbulb className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium">Tips</p>
          <p className="text-sm text-muted-foreground">
            Pilih perangkat yang paling sesuai agar teknisi dapat mempersiapkan
            alat yang dibutuhkan.
          </p>
        </div>
      </div>
    </div>
  );
}
