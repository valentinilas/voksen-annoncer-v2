import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/va/header";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <div className="container mx-auto px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}