import { Inter } from 'next/font/google';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Aside from '@/components/layout/Aside';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-[#f6f7ff]'>
      <div
        className={clsxm(
          'mx-auto flex gap-4 ',
          `max-w-[1280px]`,
          inter.className
        )}
      >
        {/* <DismissableToast /> */}

        <Aside className={clsxm('top-12 mt-12 hidden lg:block', `w-[265px]`)} />

        <main className={clsxm('mt-12 scroll-smooth', ` md:w-[1024px]`)}>
          {children}
        </main>
        {/* 
        <BaseDialog
          onClose={handleClose}
          onSubmit={handleSubmit}
          open={open}
          options={state}
        /> */}
      </div>
    </div>
  );
}
