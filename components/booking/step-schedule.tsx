"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function StepSchedule() {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="bookingDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Tanggal *</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="bookingTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Jam *</FormLabel>
              <FormControl>
                <Input
                  type="time"
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="locationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Lokasi *</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value ?? ""}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rumah" id="rumah" className="border-[#E5E7EB] data-[state=checked]:border-[#22C55E] data-[state=checked]:bg-[#22C55E]" />
                  <Label htmlFor="rumah" className="cursor-pointer text-[#0F172A]">
                    🏠 Rumah
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kantor" id="kantor" className="border-[#E5E7EB] data-[state=checked]:border-[#22C55E] data-[state=checked]:bg-[#22C55E]" />
                  <Label htmlFor="kantor" className="cursor-pointer text-[#0F172A]">
                    🏢 Kantor
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="priority"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Prioritas *</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value ?? ""}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="normal" className="border-[#E5E7EB] data-[state=checked]:border-[#22C55E] data-[state=checked]:bg-[#22C55E]" />
                  <Label htmlFor="normal" className="cursor-pointer text-[#0F172A]">
                    ⏰ Normal
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urgent" id="urgent" className="border-[#E5E7EB] data-[state=checked]:border-[#22C55E] data-[state=checked]:bg-[#22C55E]" />
                  <Label htmlFor="urgent" className="cursor-pointer text-[#0F172A]">
                    ⚡ Urgent (+Biaya Tambahan)
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="notes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Catatan Tambahan (Opsional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Informasi tambahan untuk teknisi..."
                className="min-h-[80px] rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
