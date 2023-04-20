import Link from 'next/link';
import { createElement } from 'react';

import clsxm from '@/lib/clsxm';
import useScrollSpy from '@/hooks/useScrollSpy';

import { AsideNavData, asideNavData } from '@/data/asideNav';

const createHref = (menu: AsideNavData) => {
  if (menu.type === 'anchor') {
    return `/#${menu.href}`;
  }

  return menu.href || '/';
};

const AsideMenu = () => {
  const activeSection = useScrollSpy();

  return (
    <nav className='mt-10'>
      <ul className=''>
        {asideNavData.map((menu) => {
          const href = createHref(menu);

          return (
            <li key={menu.href}>
              {menu.type === 'button' && (
                <button type='button'>{menu.label}</button>
              )}
              {menu.type !== 'button' && (
                <Link
                  href={href}
                  className={clsxm(
                    ' flex items-center gap-4 transition-all duration-500 hover:pl-1',
                    activeSection === menu.href
                      ? 'text-[#d35d0e]'
                      : 'text-white'
                  )}
                >
                  {menu.icon &&
                    createElement(menu.icon, {
                      className: clsxm('h-4 w-4'),
                    })}

                  {menu.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AsideMenu;
