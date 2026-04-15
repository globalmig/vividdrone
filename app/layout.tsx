import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
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

const BASE_URL = "https://vividdrone.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "드론 촬영 전문 | 비비드드론",
    template: "%s | Vivid Drone Studio",
  },
  description: "드론 촬영, 뮤직비디오, CF, 방송 영상 제작 전문 스튜디오. 공간과 브랜드의 감각적인 순간을 영상으로 담아드립니다.",
  keywords: ["드론 촬영", "영상 제작", "뮤직비디오", "CF 촬영", "방송 촬영", "항공 촬영", "브랜드 영상", "비비드드론", "Vivid Drone Studio", "TWS 투어스", "우기 YUQI", "Hearts2Hearts 하츠투하츠", "tvN 헬스파머", "맥심가옥", "케이팝 뮤직비디오", "아이돌 MV 촬영"],
  authors: [{ name: "Vivid Drone Studio" }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Vivid Drone Studio",
    title: "Vivid Drone Studio",
    description: "드론 촬영, 뮤직비디오, CF, 방송 영상 제작 전문 스튜디오. 공간과 브랜드의 감각적인 순간을 영상으로 담아드립니다.",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivid Drone Studio",
    description: "드론 촬영, 뮤직비디오, CF, 방송 영상 제작 전문 스튜디오.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    other: {
      "naver-site-verification": "725405b5388249ffb4251377d48a31265eced318",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKVCLLNK" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
      </body>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NKVCLLNK');`}</Script>
    </html>
  );
}
