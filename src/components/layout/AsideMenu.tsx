import { useRouter } from 'next/router';
import { createElement } from 'react';

import clsxm from '@/lib/clsxm';
import useScrollSpy from '@/hooks/useScrollSpy';

import { AsideNavData, asideNavData } from '@/data/asideNav';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type LinkProps = {
  type: 'a' | 'Link';
} & UnstyledLinkProps;

const Link = ({ type, children, ...rest }: LinkProps) => {
  if (type === 'a') return <a {...rest}>{children}</a>;
  return <UnstyledLink {...rest}>{children}</UnstyledLink>;
};

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
      <ul className='flex space-x-3 lg:block lg:space-x-0 lg:space-y-2'>
        {asideNavData.map((menu) => {
          const href = createHref(menu);

          return (
            <li key={menu.href}>
              {menu.type === 'button' && (
                <button type='button'>{menu.label}</button>
              )}

              <Link
                type={isHomePage && menu.type === 'anchor' ? 'a' : 'Link'}
                href={href}
                className={clsxm(
                  'relative flex items-center gap-4 text-white transition-all duration-500 lg:hover:pl-1'
                )}
              >
                <div
                  className={clsxm(
                    'bg-primary-600 absolute -left-[27px] hidden h-full  rounded-r-md lg:block',
                    ' transition-all duration-200',
                    activeSection === menu.href ? 'w-[3px]' : 'w-0'
                  )}
                />

                {menu.icon &&
                  createElement(menu.icon, {
                    className: clsxm('h-4 w-4 hidden lg:block'),
                  })}

                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AsideMenu;
