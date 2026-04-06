import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vivid Drone Studio",
  description: "드론 촬영과 브랜드 영상 제작을 소개하는 랜딩 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
