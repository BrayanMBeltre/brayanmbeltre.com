

export type MenuItem = {
  label: string;
  href?: string;
  type: 'link' | 'anchor' | 'button';
};

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    type: 'anchor',
  },
  {
    label: 'About',
    href: 'about',
    type: 'anchor',
  },
  {
    label: 'Resume',
    href: 'resume',
    type: 'anchor',
  },
  {
    label: 'Projects',
    href: 'projects',
    type: 'anchor',
  },
  {
    label: 'Contact',
    href: 'contact',
    type: 'anchor',
  },
];