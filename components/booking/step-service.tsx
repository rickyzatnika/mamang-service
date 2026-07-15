"use client";

import { useFormContext } from "react-hook-form";
import { SERVICES_BY_DEVICE, SERVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Check, Lightbulb } from "lucide-react";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
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
                  "text-sm font-medium transition-colors",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {service}
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
            Anda dapat memilih lebih dari satu layanan.
          </p>
        </div>
      </div>
    </div>
  );
}
