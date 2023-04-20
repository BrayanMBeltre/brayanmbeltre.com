import { IconType } from 'react-icons';
import {
  FiBookOpen,
  FiBriefcase,
  FiHome,
  FiPhone,
  FiUser,
} from 'react-icons/fi';

export type AsideNavData = {
  label: string;
  href?: string;
  type: 'link' | 'anchor' | 'button';
  icon?: IconType;
};

export const asideNavData: AsideNavData[] = [
  {
    label: 'Home',
    href: '/',
    type: 'link',
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
