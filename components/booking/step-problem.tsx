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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEVICE_AGE_OPTIONS } from "@/lib/constants";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRef } from "react";

export function StepProblem() {
  const { control, watch, setValue } = useFormContext();
  const images: string[] = watch("images") || [];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const remaining = 5 - images.length;
    const newFiles = Array.from(files).slice(0, remaining);

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setValue("images", [...images, result], { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setValue("images", updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Merk</FormLabel>
              <FormControl>
                <Input placeholder="Samsung, Apple, Asus..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input placeholder="iPhone 15, ROG Strix..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="deviceAge"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Usia Perangkat</FormLabel>
            <Select onValueChange={field.onChange} value={field.value ?? ""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih usia perangkat" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {DEVICE_AGE_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="problem"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ceritakan Kerusakan *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Jelaskan masalah yang Anda alami secara detail..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <p className="text-xs text-muted-foreground">
              Minimal 20 karakter
            </p>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormLabel>Foto Kerusakan (Maks. 5)</FormLabel>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          <AnimatePresence>
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-border group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3.5 h-3.5 text-destructive-foreground" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {images.length < 5 && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
            >
              <Upload className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Upload</span>
            </motion.button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
        <ImageIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium">Tips</p>
          <p className="text-sm text-muted-foreground">
            Foto kerusakan akan membantu proses diagnosa.
          </p>
        </div>
      </div>
    </div>
  );
}
