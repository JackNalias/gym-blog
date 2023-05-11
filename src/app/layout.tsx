import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gym Head Blog",
  description:
    "Gym head: everything you need to know about the gym in 2023, including bodybuilding (hypertrophy), strength, power-lifting, diet, nutrition, cardio and endurance training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
