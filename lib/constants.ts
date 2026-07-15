import {
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Package,
  type LucideIcon,
} from "lucide-react";

export const TOTAL_STEPS = 6;

export const STEP_TITLES = [
  "Kenalan Dulu Yuk",
  "Perangkat Apa Nih?",
  "Butuh Bantuan Apa?",
  "Ceritain Masalahnya",
  "Kapan Kami Datang?",
  "Hampir Selesai!",
];

export const STEP_DESCRIPTIONS = [
  "Agar kami tahu siapa yang akan kami bantu.",
  "Pilih perangkat yang sedang bermasalah.",
  "Pilih layanan yang Anda perlukan.",
  "Semakin lengkap informasinya, semakin cepat teknisi dapat membantu.",
  "Pilih waktu yang paling nyaman.",
  "Periksa kembali data booking Anda.",
];

export const STEP_TIPS = [
  "Alamat yang lengkap membantu teknisi menemukan lokasi Anda lebih cepat.",
  "Pilih perangkat yang paling sesuai agar teknisi dapat mempersiapkan alat yang dibutuhkan.",
  "Anda dapat memilih lebih dari satu layanan.",
  "Foto kerusakan akan membantu proses diagnosa.",
  "Kami akan menghubungi Anda terlebih dahulu sebelum teknisi berangkat.",
  "",
];

export const MOTIVATIONAL_MESSAGES = [
  "Senang bertemu dengan Anda.",
  "Hampir selesai, tinggal beberapa langkah lagi.",
  "Informasi yang lengkap mempercepat proses service.",
  "Foto sangat membantu teknisi kami.",
  "Teknisi akan datang sesuai jadwal yang Anda pilih.",
  "Tinggal satu klik lagi!",
];

export const ESTIMATED_TIMES = ["3 menit", "2.5 menit", "2 menit", "1.5 menit", "1 menit", "30 detik"];

export interface DeviceOption {
  id: string;
  label: string;
  icon: LucideIcon;
  emoji: string;
}

export const DEVICE_OPTIONS: DeviceOption[] = [
  { id: "handphone", label: "Handphone", icon: Smartphone, emoji: "📱" },
  { id: "laptop", label: "Laptop", icon: Laptop, emoji: "💻" },
  { id: "desktop_pc", label: "Desktop PC", icon: Monitor, emoji: "🖥" },
  { id: "gaming_pc", label: "Gaming PC", icon: Gamepad2, emoji: "🎮" },
  { id: "lainnya", label: "Lainnya", icon: Package, emoji: "📦" },
];

export const SERVICE_OPTIONS = [
  "Service",
  "Install Windows",
  "Upgrade SSD",
  "Upgrade RAM",
  "Ganti LCD",
  "Ganti Keyboard",
  "Rakit PC",
  "Cleaning",
  "Maintenance",
  "Konsultasi",
];

export const SERVICES_BY_DEVICE: Record<string, string[]> = {
  handphone: ["Service", "Ganti LCD", "Konsultasi"],
  laptop: SERVICE_OPTIONS.filter((s) => s !== "Rakit PC"),
  desktop_pc: SERVICE_OPTIONS.filter((s) => s !== "Ganti LCD" && s !== "Ganti Keyboard"),
  gaming_pc: SERVICE_OPTIONS.filter((s) => s !== "Ganti LCD" && s !== "Ganti Keyboard"),
  lainnya: SERVICE_OPTIONS,
};

export const DEVICE_AGE_OPTIONS = [
  "Kurang dari 1 tahun",
  "1-2 tahun",
  "2-3 tahun",
  "3-5 tahun",
  "Lebih dari 5 tahun",
];
