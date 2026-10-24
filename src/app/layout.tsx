import type { Metadata } from "next";
import { Coming_Soon, Special_Elite } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

const comingSoon = Coming_Soon({
  variable: "--font-coming-soon",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TohidEq",
  description: "Tohid Eghdami's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html
      lang="en"
      className={`${comingSoon.variable} ${specialElite.variable} h-full antialiased`}
      suppressHydrationWarning >

      <body className="min-h-full flex flex-col">

        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>

    </html>
  );
}
