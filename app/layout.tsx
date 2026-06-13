import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ============================================================
// METADATA - Update with your information
// Prompt: "Update the page title and description for SEO"
// ============================================================
export const metadata: Metadata = {
  title: "Jingyou Ma - MBA Student in Data Science | Data & Strategy",
  description: "Jingyou Ma is an MBA student in Data Science at CSTU, focused on bridging business strategy with data-driven insights.",
  keywords: ["Data Science", "MBA", "Business Strategy", "AI Orchestration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

