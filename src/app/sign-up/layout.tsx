import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sign Up - RPU",
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
            "relative inset-0 z-0 w-screen h-screen px-6 pt-20 pb-14 min-h-screen bg-background font-sans antialiased",
            nunitoSans.variable
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
