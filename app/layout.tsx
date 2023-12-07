import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/Context/ThemeProvider';
import { TailwindIndicator } from '@/components/shared/TailwindIndicator/TailwindIndicator';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Tailwind Theming With Shadcn',
  description: 'Tailwind Theming With Shadcn'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${inter.variable} `}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
