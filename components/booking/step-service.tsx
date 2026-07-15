"use client";

import { useFormContext } from "react-hook-form";
import { SERVICES_BY_DEVICE, SERVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function StepService() {
  const { watch, setValue } = useFormContext();
  const selectedDevice: string = watch("device") || "";
  const selectedServices: string[] = watch("services") || [];
  const availableServices = SERVICES_BY_DEVICE[selectedDevice] || SERVICE_OPTIONS;

  const toggleService = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setValue("services", updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {availableServices.map((service) => {
          const isSelected = selectedServices.includes(service);

          return (
            <motion.button
              key={service}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleService(service)}
              className={cn(
                "relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left",
                isSelected
                  ? "border-[#22C55E] bg-[#22C55E]/5"
                  : "border-[#E5E7EB] bg-white hover:border-[#22C55E]/30"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-lg shrink-0 transition-colors",
                  isSelected ? "bg-[#22C55E] text-white" : "bg-[#F1F5F9] text-[#94A3B8]"
                )}
              >
                {isSelected ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-medium">+</span>
                )}
              </div>
              <span
                className={cn(
                  "text-sm font-medium",
                  isSelected ? "text-[#22C55E]" : "text-[#0F172A]"
                )}
              >
                {service}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
