import Link from 'next/link';
import React, { createElement } from 'react';

import clsxm from '@/lib/clsxm';

import { asideNavData } from './Aside';

const AsideMenu = () => {
  return (
    <nav className='mt-10'>
      <ul className=''>
        {asideNavData.map((menu) => (
          <li key={menu.href}>
            <Link
              href={menu?.type === 'anchor' ? `#${menu.href}` : menu.href}
              className={clsxm(
                'flex items-center gap-4 transition-all duration-500 hover:pl-1'
              )}
            >
              {menu.icon &&
                createElement(menu.icon, {
                  className: clsxm('h-4 w-4'),
                })}
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AsideMenu;
