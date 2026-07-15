import { z } from "zod";

export const customerSchema = z.object({
  customerName: z.string().min(2, "Nama harus minimal 2 karakter"),
  phone: z
    .string()
    .min(10, "Nomor WhatsApp harus minimal 10 digit")
    .max(15, "Nomor WhatsApp maksimal 15 digit")
    .regex(/^[\d+]+$/, "Nomor WhatsApp hanya boleh berisi angka"),
  email: z.string().email("Email tidak valid").optional().or(z.literal("")),
  address: z.string().min(5, "Alamat harus minimal 5 karakter"),
  city: z.string().min(2, "Kota wajib diisi"),
  district: z.string().min(2, "Kecamatan wajib diisi"),
  postalCode: z.string().optional(),
  googleMaps: z.string().url("URL tidak valid").optional().or(z.literal("")),
});

export const deviceSchema = z.object({
  device: z.string().min(1, "Pilih salah satu perangkat"),
});

export const serviceSchema = z.object({
  services: z.array(z.string()).min(1, "Pilih minimal satu layanan"),
});

export const problemSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  deviceAge: z.string().optional(),
  problem: z
    .string()
    .min(20, "Ceritakan masalah Anda minimal 20 karakter"),
  images: z.array(z.string()).max(5, "Maksimal 5 gambar"),
});

export const scheduleSchema = z.object({
  bookingDate: z.string().min(1, "Pilih tanggal"),
  bookingTime: z.string().min(1, "Pilih jam"),
  locationType: z.enum(["rumah", "kantor"], {
    message: "Pilih lokasi",
  }),
  priority: z.enum(["normal", "urgent"], {
    message: "Pilih prioritas",
  }),
  notes: z.string().optional(),
});

export const reviewSchema = z.object({
  agreed: z.literal(true, {
    message: "Anda harus menyetujui data yang benar",
  }),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
export type DeviceFormData = z.infer<typeof deviceSchema>;
export type ServiceFormData = z.infer<typeof serviceSchema>;
export type ProblemFormData = z.infer<typeof problemSchema>;
export type ScheduleFormData = z.infer<typeof scheduleSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;

export type BookingFormData = CustomerFormData &
  DeviceFormData &
  ServiceFormData &
  ProblemFormData &
  ScheduleFormData &
  ReviewFormData;
