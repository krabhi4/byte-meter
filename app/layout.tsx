import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/common/theme-provider';
import { MainLayout } from '@/components/common/main-layout';
import { Toaster } from '@/components/ui/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Byte Meter - Data Usage Calculator',
  description:
    'Byte Meter is a simple tool to measure internet data usage based on speed and time. Easily calculate data consumption for streaming, browsing, and downloading.',
  keywords: [
    'internet data usage',
    'data calculator',
    'data usage meter',
    'internet speed calculator',
    'bandwidth calculator',
    'Byte Meter',
    'data usage tool',
    'speed to data usage',
    'internet connection',
    'data usage tracker',
  ],
  authors: [{ name: 'Kumar Abhishek' }],
  creator: 'Kumar Abhishek',
  publisher: 'Kumar Abhishek',
  openGraph: {
    title: 'Byte Meter - Internet Data Usage Calculator',
    description:
      'Calculate your data usage based on internet speed and usage time with Byte Meter. Perfect for tracking streaming, downloads, and more.',
    url: 'https://byte-meter.vercel.app/',
    siteName: 'Byte Meter',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 240,
        alt: 'Byte Meter logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  themeColor: '#09090B',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
