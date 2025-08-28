import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const integral = localFont({
  src: [
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-demibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-extrabold.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "900",
    },
  ],
  variable: "--font-integral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shop.Co",
  description: "A clothing e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${satoshi.variable} ${integral.variable}`}>
        {children}
      </body>
    </html>
  );
}
