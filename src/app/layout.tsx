import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import StructuredData from "@/components/StructuredData";
import MobileNav from "@/components/MobileNav";
import Chat from "@/components/chat/Chat";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ByteMatrix Software Solution | Full Stack Development Team",
  description: "Expert software development team specializing in frontend, backend, and full stack development projects. Contract-based development services for businesses of all sizes.",
  keywords: ["ByteMatrix Software Solution", "software development", "frontend", "backend", "contract-based development", "full stack development project", "web development", "mobile app development"],
  authors: [{ name: "ByteMatrix Software Solution" }],
  metadataBase: new URL('https://bytematrix.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ByteMatrix Software Solution | Full Stack Development Team",
    description: "Expert software development team specializing in frontend, backend, and full stack development projects. Contract-based development services for businesses of all sizes.",
    type: "website",
    url: 'https://bytematrix.dev',
    siteName: 'ByteMatrix Software Solution',
    locale: 'en_US',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'ByteMatrix Software Solution - Full Stack Development Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByteMatrix Software Solution | Full Stack Development Team',
    description: 'Expert software development team specializing in frontend, backend, and full stack development projects.',
    images: ['/api/og'],
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <SplashScreen />
          <ThemeToggle />
          <MobileNav />
          {children}
          <Chat />
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
