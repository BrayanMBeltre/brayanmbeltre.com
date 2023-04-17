import Image from 'next/image';
import React from 'react';
import {
  FiBookOpen,
  FiBriefcase,
  FiHome,
  FiPhone,
  FiUser,
} from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import AsideMenu from './AsideMenu';

import avatar from '~/images/avatar.png';

export const asideNavData = [
  {
    label: 'Home',
    href: '/',
    icon: FiHome,
  },
  {
    label: 'About',
    href: 'about',
    type: 'anchor',
    icon: FiUser,
  },
  {
    label: 'Resume',
    href: 'resume',
    type: 'anchor',
    icon: FiBookOpen,
  },
  {
    label: 'Works',
    href: 'works',
    type: 'anchor',
    icon: FiBriefcase,
  },
  {
    label: 'Contact',
    href: 'contact',
    type: 'anchor',
    icon: FiPhone,
  },
];

type AsideProps = {
  className?: string;
};

const Aside = ({ className }: AsideProps) => {
  return (
    <aside
      className={clsxm(
        'sticky  h-[620px] flex-shrink-0 rounded-3xl bg-[#282828] p-7 text-white',
        className
      )}
    >
      <Image priority alt='avatar' src={avatar} />

      <h2 className='text-xl font-bold '>
        Brayan M. Beltre<span className='text-4xl text-[#d65d0e]'>.</span>
      </h2>
      <p>WEB DEVELOPER</p>

      <AsideMenu />
    </aside>
  );
};

export default Aside;
