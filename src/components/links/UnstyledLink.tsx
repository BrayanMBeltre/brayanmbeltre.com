import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isAnchor = href && href.startsWith('#');

    if (!isAnchor && !openNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={className}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target={openNewTab ? '_blank' : '_self'}
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm(openNewTab && 'cursor-newtab', className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
