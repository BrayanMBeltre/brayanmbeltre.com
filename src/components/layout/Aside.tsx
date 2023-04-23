import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { userData } from '@/data/user';

import AsideMenu from '@/components/layout/AsideMenu';

import avatar from '~/images/avatar.png';

type AsideProps = {
  className?: string;
};

// const AsideMenu = dynamic(() => import('./AsideMenu'), {
//   // ssr: false,
// });

const Aside = ({ className }: AsideProps) => {
  return (
    <aside
      className={clsxm(
        'sticky h-[620px] flex-shrink-0 rounded-3xl bg-[#282828] p-7 text-white',
        className
      )}
    >
      <Link href='/'>
        <Image priority alt='avatar' src={avatar} />

        <h2 className='text-xl font-bold '>
          Brayan M. Beltre<span className='text-4xl text-[#d65d0e]'>.</span>
        </h2>

        <p>WEB DEVELOPER</p>
      </Link>

      <AsideMenu />

      <p className='pt-[220px] opacity-70'>
        <small>
          &copy; {new Date().getFullYear()} {userData.name}
        </small>
      </p>
    </aside>
  );
};

export default Aside;
