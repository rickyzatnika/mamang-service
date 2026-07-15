"use client";

import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { DEVICE_OPTIONS } from "@/lib/constants";
import {
  User,
  Laptop,
  Wrench,
  MessageCircle,
  Calendar,
} from "lucide-react";

export function StepReview() {
  const { watch, setValue } = useFormContext();
  const form = watch();

  const deviceLabel =
    DEVICE_OPTIONS.find((d) => d.id === form.device)?.label || form.device;

  const locationLabel = form.locationType === "rumah" ? "🏠 Rumah" : "🏢 Kantor";
  const priorityLabel =
    form.priority === "normal" ? "⏰ Normal" : "⚡ Urgent";

  const sections = [
    {
      icon: User,
      title: "Customer",
      items: [
        { label: "Nama", value: form.customerName },
        { label: "WhatsApp", value: form.phone },
        form.email && { label: "Email", value: form.email },
        { label: "Alamat", value: form.address },
        { label: "Kota", value: `${form.city}, ${form.district}` },
      ].filter(Boolean) as { label: string; value: string }[],
    },
    {
      icon: Laptop,
      title: "Perangkat",
      items: [
        { label: "Tipe", value: deviceLabel },
        form.brand && { label: "Merk", value: form.brand },
        form.model && { label: "Model", value: form.model },
        form.deviceAge && { label: "Usia", value: form.deviceAge },
      ].filter(Boolean) as { label: string; value: string }[],
    },
    {
      icon: Wrench,
      title: "Layanan",
      items: [
        { label: "Services", value: (form.services as string[])?.join(", ") },
      ],
    },
    {
      icon: MessageCircle,
      title: "Masalah",
      items: [
        { label: "Keluhan", value: form.problem },
        form.images?.length > 0 && {
          label: "Foto",
          value: `${form.images.length} gambar`,
        },
      ].filter(Boolean) as { label: string; value: string }[],
    },
    {
      icon: Calendar,
      title: "Jadwal",
      items: [
        { label: "Tanggal", value: form.bookingDate },
        { label: "Jam", value: form.bookingTime },
        { label: "Lokasi", value: locationLabel },
        { label: "Prioritas", value: priorityLabel },
        form.notes && { label: "Catatan", value: form.notes },
      ].filter(Boolean) as { label: string; value: string }[],
    },
  ];

  return (
    <div className="space-y-4">
      {sections.map((section, i) => {
        const Icon = section.icon;
        return (
          <div key={i} className="rounded-xl border border-border p-4">
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold">{section.title}</h4>
            </div>
            <div className="space-y-2">
              {section.items.map((item, j) => (
                <div key={j} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-right max-w-[60%] truncate">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <Separator className="my-4" />

      <div className="flex items-start gap-3">
        <Checkbox
          id="agree"
          onCheckedChange={(checked) =>
            setValue("agreed", checked === true, { shouldValidate: true })
          }
        />
        <Label htmlFor="agree" className="text-sm cursor-pointer leading-relaxed">
          Saya memastikan bahwa semua informasi yang saya berikan sudah benar
          dan lengkap.
        </Label>
      </div>
    </div>
  );
}
