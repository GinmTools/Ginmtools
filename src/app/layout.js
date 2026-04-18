import { Inter } from "next/font/google";
import "./globals.css";
import ginbLogo from "../images/ginb-logo-transparent.png";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "GINB Tools | Professional Tool Supplier Since 1958",
  description:
    "Industrial-grade hand tools, power tools, and precision instruments. Trusted B2B supplier serving enterprises, construction firms, and manufacturers worldwide since 1958. ISO 9001 certified.",
  keywords: [
    "B2B tools",
    "industrial tools",
    "power tools supplier",
    "bulk tool orders",
    "professional tools",
    "GINB Tools",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "GINB Tools | Professional Tool Supplier Since 1958",
    description:
      "Industrial-grade tools engineered for performance. Trusted by enterprises worldwide.",
    type: "website",
    images: [ginbLogo.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
