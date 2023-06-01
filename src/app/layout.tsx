import { type ReactNode } from 'react';
import { Inter } from 'next/font/google';

// import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Test T3-App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} container mx-auto bg-slate-800 p-4 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
