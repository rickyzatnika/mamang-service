"use client";

import { motion, AnimatePresence } from "motion/react";
import { Progress } from "@/components/ui/progress";
import {
  TOTAL_STEPS,
  MOTIVATIONAL_MESSAGES,
  ESTIMATED_TIMES,
} from "@/lib/constants";
import { User, Laptop, Wrench, MessageCircle, Calendar, CheckCircle } from "lucide-react";

const STEP_ICONS = [User, Laptop, Wrench, MessageCircle, Calendar, CheckCircle];

interface ProgressHeaderProps {
  currentStep: number;
}

export function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            {currentStep + 1}
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Step {currentStep + 1} of {TOTAL_STEPS}
            </p>
            <p className="text-xs text-muted-foreground">
              {Math.round(progress)}% Complete
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Estimasi selesai sekitar {ESTIMATED_TIMES[currentStep]}
        </p>
      </div>

      <Progress value={progress} className="h-2 mb-6" />

      <div className="flex items-center justify-between gap-2">
        {STEP_ICONS.map((Icon, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              index < currentStep
                ? "bg-primary text-primary-foreground"
                : index === currentStep
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-center text-sm text-muted-foreground mt-4 italic"
        >
          {MOTIVATIONAL_MESSAGES[currentStep]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
