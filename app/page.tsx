import Link from "next/link";
import Image from "next/image";
import { Smartphone, Laptop, Monitor, Wrench, Shield, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-[#E5E7EB] bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MaMang Service" width={100} height={75} className="object-contain" />
          </Link>
          <Link
            href="/booking"
            className="h-10 px-5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-sm flex items-center justify-center transition-colors"
          >
            Booking Sekarang
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <section className="py-20 sm:py-28 text-center">
          <p className="text-[#22C55E] font-semibold text-sm mb-3">Mager Keluar?</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            MaMang yang Datang.
          </h1>
          <p className="text-[#475569] max-w-lg mx-auto mb-8 leading-relaxed">
            Teknisi profesional langsung datang ke rumah atau kantor Anda.
            Service Handphone, Laptop, PC, dan masih banyak lagi.
          </p>
          <Link
            href="/booking"
            className="inline-flex h-12 px-8 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-base items-center justify-center transition-colors"
          >
            Booking Sekarang
          </Link>
        </section>

        <section className="border-t border-[#E5E7EB] py-16">
          <h2 className="text-xl font-bold text-[#0F172A] text-center mb-10">
            Kenapa MaMang Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Cepat & Praktis",
                desc: "Booking online, teknisi datang ke lokasi Anda. Tidak perlu antri.",
              },
              {
                icon: Shield,
                title: "Terpercaya",
                desc: "Teknisi berpengalaman dan bersertifikasi. Garansi service tersedia.",
              },
              {
                icon: Wrench,
                title: "Lengkap",
                desc: "Handphone, Laptop, PC, Install Windows, Upgrade SSD/RAM, dan lainnya.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-11 h-11 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#22C55E]" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E5E7EB] py-16">
          <h2 className="text-xl font-bold text-[#0F172A] text-center mb-10">
            Service Yang Tersedia
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Smartphone, label: "Handphone Repair" },
              { icon: Laptop, label: "Laptop Repair" },
              { icon: Monitor, label: "PC Repair" },
              { icon: Wrench, label: "Install Windows" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-[#E5E7EB] bg-white"
              >
                <item.icon className="w-6 h-6 text-[#22C55E]" />
                <span className="text-sm font-medium text-[#0F172A]">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E7EB] py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-[#94A3B8]">
          &copy; {new Date().getFullYear()} MaMang Service. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
