import { createElement } from 'react';

import clsxm from '@/lib/clsxm';

import { socialData } from '@/data/social';

import ContactForm from '@/components/ContactForm';
import UnderlineLink from '@/components/links/UnderlineLink';
import SectionCard from '@/components/Sections/Card';

type ContactItemProps = (typeof socialData)[number];

const ContactItem = ({ description, href, icon, name }: ContactItemProps) => (
  <li className='flex gap-4'>
    {createElement(icon, {
      className: clsxm('mt-1 h-8 w-8 text-primary-600'),
    })}

    <UnderlineLink target='_blank' href={href} className='cursor-newtab'>
      <div>
        <p className='font-bold dark:text-[#ebdbb2]'>{name}</p>
        <p className='dark:text-[#d5c4a1]'>{description}</p>
      </div>
    </UnderlineLink>
  </li>
);

const ContactSection = () => {
  return (
    <SectionCard title='Lets work together!' id='contact'>
      <ul className='grid gap-[50px] sm:grid-cols-2'>
        {socialData.map((social) => (
          <ContactItem key={social.name} {...social} />
        ))}
      </ul>

      <div className='mt-[50px]'>
        <ContactForm />
      </div>
    </SectionCard>
  );
};

export default ContactSection;
