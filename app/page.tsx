import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Monitor, Wrench, Shield, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MaMang Service" width={100} height={82} className="object-contain" />
          </Link>
          <Link href="/booking" className={buttonVariants({ size: "sm" })}>
            Booking Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-20 sm:py-32 text-center">
          <p className="text-primary font-medium mb-4">Mager Keluar?</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            MaMang yang Datang.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Teknisi profesional langsung datang ke rumah atau kantor Anda.
            Service Handphone, Laptop, PC, dan masih banyak lagi.
          </p>
          <Link
            href="/booking"
            className={buttonVariants({ size: "lg" }) + " gap-2 text-base inline-flex"}
          >
            Booking Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        <section className="border-t border-border bg-card/30">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Service Yang Tersedia
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Smartphone, label: "Handphone Repair" },
                { icon: Laptop, label: "Laptop Repair" },
                { icon: Monitor, label: "PC Repair" },
                { icon: Wrench, label: "Install Windows" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MaMang Service. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
