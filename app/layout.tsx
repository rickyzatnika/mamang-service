import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/convex-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap', // Prevents layout shift
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
    <html
      lang="id"
      className={`${poppins.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
