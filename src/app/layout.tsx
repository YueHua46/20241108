import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// seo 优化
export const metadata: Metadata = {
  title: "Rotate PDF Pages",
  description: "Interview Project",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
  colorScheme: "light",
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["PDF", "Rotate", "Interview", "Project"],
  openGraph: {
    title: "Rotate PDF Pages",
    description: "Interview Project", // 测试用
    url: "https://rotate-pdf-pages.vercel.app", // 测试用
    siteName: "Rotate PDF Pages",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your_twitter_handle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
