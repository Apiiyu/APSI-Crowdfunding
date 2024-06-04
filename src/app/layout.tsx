import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Home - RPU",
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
        <main
          id="content"
          className={cn(
            "relative inset-0 z-0 w-screen h-fit bg-background font-sans antialiased overflow-x-hidden",
            nunitoSans.variable
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
