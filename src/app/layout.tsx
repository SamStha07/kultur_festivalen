import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/components/header';

import './globals.css';
import Footer from '@/components/footer';

const poppins = Poppins({
  weight: ['400', '500', '500', '600', '700', '800'],
  variable: '--font-poppins',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Kultur Festivalen',
  description: 'Kultur Festivalen'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
