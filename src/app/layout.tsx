import "./globals.scss";
import React from "react";
import { Roboto } from "next/font/google";
import Script from "next/script";
import PrimaryHeader from "@/app/components/PrimaryHeader";
import PrimaryFooter from "@/app/components/PrimaryFooter";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Gym Thinker",
  description:
    "Gym Thinker: everything you need to know about the gym in 2023, including bodybuilding (hypertrophy), strength, power-lifting, diet, nutrition, cardio and endurance training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-neutral-700">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="googleAnalytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <head>
        <meta
          name="google-site-verification"
          content="wNHuGzZrO-0--WGBkXr75EDdbWp_2mJfr_xhXXWp6mg"
        />
      </head>
      <body className={inter.className}>
        <PrimaryHeader />
        {children}
        <PrimaryFooter />
      </body>
    </html>
  );
}
