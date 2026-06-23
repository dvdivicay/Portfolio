import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donald V. Divicay Jr. — Embedded Software Engineer",
  description:
    "Embedded Software Engineer specializing in firmware development, multi-sensor integration, and low-level driver design with Zephyr RTOS and ESP-IDF.",
  authors: [{ name: "Donald V. Divicay Jr." }],
  icons: { icon: asset("/favicon.svg") },
  openGraph: {
    title: "Donald V. Divicay Jr. — Embedded Software Engineer",
    description:
      "Firmware development, multi-sensor integration, and low-level driver design with Zephyr RTOS and ESP-IDF.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="theme-color" content="#2C3930" />
        {/* Devicon technology logos (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
