import clsx from 'clsx';

import './globals.css';

import clsxm from '@/lib/clsxm';

import Aside from '@/components/layout/Aside';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'mx-auto flex gap-4 bg-[#f6f7ff]',
          `w-full max-w-[1280px]`,
          inter.className
        )}
      >
        <Aside className={clsxm('top-12 mt-12 hidden lg:block', `w-[265px]`)} />

        <main className={clsxm('mt-12 ', ` md:w-[1024px]`)}>{children}</main>
      </body>
    </html>
  );
}
