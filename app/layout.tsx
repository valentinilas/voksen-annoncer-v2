import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/va/header/header";
import Footer from "@/components/va/footer/footer";
import { Geist } from "next/font/google";


export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Gratis annoncer for massage, sex, escort, swingers | Voksenannoncer",
  description: "Udforsk og opret gratis voksenannoncer på vores  platform. Nem, hurtig og sikker måde at dele dine annoncer på. Start i dag og nå ud til flere!",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="bg-zinc-50">

        <div className="container mx-auto px-4 ">
          <Header />
          <div className="w-full mx-auto p-4">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
