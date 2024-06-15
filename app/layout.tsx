import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import { Navbar } from "@/components/navbar/navbar";
import { CrispProvider } from "@/components/crisp-provider";
import { Footer } from "@/components/footer/footer";
import { Progress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Trip Teasers",
    template: "%s - Trip Teasers",
  },
  description: "Get everything what you need for your next adventure!",
  metadataBase: new URL("https://tourist-app-ten.vercel.app"),
  icons: {
    icon: "favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
    other: [
      { rel: "icon", sizes: "192x192", url: "/android-chrome-192x192.png" },
      { rel: "icon", sizes: "512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <CrispProvider />
        <body
          className={`${poppins.variable} from-[#121212] from-30%  via-[#303367] via-70% to-[#676FFE] dark:bg-gradient-to-br`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Progress />
            <Navbar session={session} />
            {children}
            <Footer />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
