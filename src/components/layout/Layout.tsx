import { Inter } from 'next/font/google';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import DismissableToast from '@/components/DismissableToast';
import Aside from '@/components/layout/Aside';
import MobileNav from '@/components/layout/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-[#fbf1c7] dark:bg-[#282828]'>
      <div
        className={clsxm(
          'mx-auto gap-4  ',
          `max-w-[1280px]`,
          'lg:flex',
          inter.className
        )}
      >
        <DismissableToast />

        <MobileNav className={clsxm('mx-[15px] lg:hidden', 'my-[20px]')} />

        <Aside
          className={clsxm(
            'top-12 ml-[15px] mt-12 ',
            `w-[265px]`,
            'hidden lg:block'
          )}
        />

        <main className={clsxm('px-[15px] sm:mt-12', ` lg:w-[1024px]`)}>
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
