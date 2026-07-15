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
            <FormLabel>Nama Lengkap *</FormLabel>
            <FormControl>
              <Input placeholder="Masukkan nama lengkap" {...field} />
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
            <FormLabel>Nomor WhatsApp *</FormLabel>
            <FormControl>
              <Input placeholder="08xxxxxxxxxx" type="tel" {...field} />
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
            <FormLabel>Email (Opsional)</FormLabel>
            <FormControl>
              <Input placeholder="email@contoh.com" type="email" {...field} />
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
            <FormLabel>Alamat Lengkap *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Jalan, nomor rumah, RT/RW, kelurahan..."
                className="min-h-[80px]"
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
              <FormLabel>Kota *</FormLabel>
              <FormControl>
                <Input placeholder="Nama kota" {...field} />
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
              <FormLabel>Kecamatan *</FormLabel>
              <FormControl>
                <Input placeholder="Nama kecamatan" {...field} />
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
              <FormLabel>Kode Pos (Opsional)</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
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
              <FormLabel>Google Maps Link (Opsional)</FormLabel>
              <FormControl>
                <Input placeholder="https://maps.app.goo.gl/..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium">Tips</p>
          <p className="text-sm text-muted-foreground">
            Alamat yang lengkap membantu teknisi menemukan lokasi Anda lebih
            cepat.
          </p>
        </div>
      </div>
    </div>
  );
}
