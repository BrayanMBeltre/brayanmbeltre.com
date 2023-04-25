import Image from 'next/image';
import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import AsideMenu from '@/components/layout/AsideMenu';

import avatar from '~/images/avatar.png';
type Props = {
  className?: string;
};

const MobileNav = ({ className }: Props) => {
  return (
    <nav
      className={clsxm(
        'flex flex-col justify-between rounded-[20px] bg-[#282828] py-[10px] pl-[10px] pr-[30px] sm:h-[57px] sm:flex-row sm:items-center sm:rounded-[30px] sm:py-0',
        className
      )}
    >
      <Link href='/' className='flex items-center gap-2'>
        <div>
          <Image
            priority
            alt='avatar'
            src={avatar}
            height={36}
            width={36}
            className='h-auto w-auto'
          />
        </div>

        <h2 className='flex items-end text-2xl font-bold  text-white dark:text-[#ebdba5]'>
          Brayan M. Beltre
          <GoPrimitiveDot className='mb-1 text-[#d65d0e]' size={16} />
        </h2>
      </Link>

      <div className='mt-[15px] sm:mt-0'>
        <AsideMenu />
      </div>
    </nav>
  );
};

export default MobileNav;
