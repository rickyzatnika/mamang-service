import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/convex-provider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MaMang Service - Mager Keluar? MaMang yang Datang.",
  description:
    "Layanan service onsite. Teknisi datang ke rumah atau kantor Anda. Handphone, Laptop, PC Repair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
