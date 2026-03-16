import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const paperlogy = localFont({
  src: [
    { path: "../../public/fonts/Paperlogy-1Thin.ttf", weight: "100" },
    { path: "../../public/fonts/Paperlogy-2ExtraLight.ttf", weight: "200" },
    { path: "../../public/fonts/Paperlogy-3Light.ttf", weight: "300" },
    { path: "../../public/fonts/Paperlogy-4Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Paperlogy-5Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Paperlogy-6SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Paperlogy-7Bold.ttf", weight: "700" },
    { path: "../../public/fonts/Paperlogy-8ExtraBold.ttf", weight: "800" },
    { path: "../../public/fonts/Paperlogy-9Black.ttf", weight: "900" },
  ],
  variable: "--font-paperlogy",
});

export const metadata: Metadata = {
  title: "잘파는 연구소 | 샤오홍슈 체험단 마케팅",
  description:
    "중국 소비자를 사로잡는 바이럴 마케팅. 샤오홍슈 체험단 마케팅 & 왕홍마케팅 A-Z 원스톱 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${paperlogy.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
