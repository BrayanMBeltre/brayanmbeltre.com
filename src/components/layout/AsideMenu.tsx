import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className='lg:mt-10'>
      <ul className='flex gap-4 lg:block'>
        {asideNavData.map((menu) => {
          const href = createHref(menu);

          return (
            <li key={menu.href}>
              {menu.type === 'button' && (
                <button type='button'>{menu.label}</button>
              )}

              {!isHomePage &&
                (menu.type === 'anchor' || menu.type === 'link') && (
                  <Link
                    href={href}
                    className={clsxm(
                      ' flex items-center gap-4 transition-all duration-500 lg:hover:pl-1',
                      activeSection === menu.href
                        ? 'text-[#d35d0e]'
                        : 'text-white'
                    )}
                  >
                    {menu.icon &&
                      createElement(menu.icon, {
                        className: clsxm('h-4 w-4 hidden lg:block'),
                      })}

                    {menu.label}
                  </Link>
                )}

              {isHomePage && menu.type === 'anchor' && (
                <a
                  href={href}
                  className={clsxm(
                    ' flex items-center gap-4 transition-all duration-500 lg:hover:pl-1',
                    activeSection === menu.href
                      ? 'text-[#d35d0e]'
                      : 'text-white'
                  )}
                >
                  {menu.icon &&
                    createElement(menu.icon, {
                      className: clsxm('h-4 w-4 hidden lg:block'),
                    })}

                  {menu.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AsideMenu;
