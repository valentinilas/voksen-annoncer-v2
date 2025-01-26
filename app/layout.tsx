import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/va/header/header";
import Footer from "@/components/va/footer/footer";
import { Geist } from "next/font/google";
import { UserProvider } from "@/context/UserContext";
import { createClient } from "@/utils/supabase/server";
import { fetchUserProfile } from "./login/actions";
import { ThemeProvider } from "@/context/ThemeContext";
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Gratis annoncer for massage, sex, escort, swingers | Voksenannoncer",
  description:
    "Udforsk og opret gratis voksenannoncer på vores  platform. Nem, hurtig og sikker måde at dele dine annoncer på. Start i dag og nå ud til flere!",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userProfile = null;

  if (user) {
    const { userProfile: profile } = await fetchUserProfile(user.id);
    userProfile = profile;
  }
  return (
    <html lang="en" className={geistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider
            initialUser={user ?? null}
            initialUserProfile={userProfile}
          >
            <div className="container mx-auto px-4 ">
              <Header />
              <div className="w-full mx-auto p-4">{children}</div>
              <Footer />
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
