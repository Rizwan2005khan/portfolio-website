import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: 'Rizwan Ullah - Software Engineer and MERN stack developer',
  description: 'Software Engineer with hands-on experience in building full-stack web applications using the MERN stack and PERN stack and also in nextjs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div id="particles-js"></div>
       <CursorTrail />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" async />
      </body>
    </html>
  );
}
