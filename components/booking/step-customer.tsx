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
import { MapPin } from "lucide-react";

export function StepCustomer() {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <FormField
        control={control}
        name="customerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Nama Lengkap *</FormLabel>
            <FormControl>
              <Input
                placeholder="Masukkan nama lengkap"
                className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Nomor WhatsApp *</FormLabel>
            <FormControl>
              <Input
                placeholder="08xxxxxxxxxx"
                type="tel"
                className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Email (Opsional)</FormLabel>
            <FormControl>
              <Input
                placeholder="email@contoh.com"
                type="email"
                className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0F172A]">Alamat Lengkap *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Jalan, nomor rumah, RT/RW, kelurahan..."
                className="min-h-[100px] rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Kota *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nama kota"
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Kecamatan *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nama kecamatan"
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Kode Pos (Opsional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="12345"
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="googleMaps"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0F172A]">Google Maps Link (Opsional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://maps.app.goo.gl/..."
                  className="h-12 rounded-xl border-[#E5E7EB] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-[#22C55E]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F1F5F9]">
        <MapPin className="w-4 h-4 text-[#94A3B8] mt-0.5 shrink-0" />
        <p className="text-sm text-[#475569]">
          Alamat yang lengkap membantu teknisi menemukan lokasi Anda lebih cepat.
        </p>
      </div>
    </div>
  );
}
