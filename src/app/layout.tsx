import "./globals.scss";
import React from "react";
import { Roboto } from "next/font/google";
import PrimaryHeader from "@/components/PrimaryHeader";
import PrimaryFooter from "@/components/PrimaryFooter";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
      <body className={inter.className}>
        <PrimaryHeader />
        {children}
        <PrimaryFooter />
      </body>
    </html>
  );
}
