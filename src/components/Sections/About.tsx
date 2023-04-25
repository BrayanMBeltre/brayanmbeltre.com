import { FiDownloadCloud, FiMail } from 'react-icons/fi';

import { userData } from '@/data/user';

import ButtonLink from '@/components/links/ButtonLink';
import SectionCard from '@/components/Sections/Card';

type AboutItemProps = {
  title: string;
  value: string;
};

const AboutItem = ({ title, value }: AboutItemProps) => (
  <li>
    <p className='text-[#333333] dark:text-[#ebdbb2]'>
      {title}: <span className='text-black dark:text-[#fbf1c7]'>{value}</span>
    </p>
  </li>
);

const AboutSection = () => {
  return (
    <SectionCard title='About' id='about'>
      <h2 className='text-[#ebdbb2]'>Hello,</h2>

      <p className='mt-[24px] text-[#333333] dark:text-[#ebdbb2]'>
        {userData.longDescription}
      </p>

      <ul className='my-[24px] grid gap-4 md:grid-cols-2'>
        <AboutItem title='Birthday' value={userData.birthday} />
        <AboutItem title='Location' value={userData.location} />
        <AboutItem title='Interests' value={userData.interests} />
        <AboutItem title='Email' value={userData.email} />
      </ul>

      <div className='flex flex-col items-start gap-4 sm:flex-row'>
        <ButtonLink
          href={userData.resumeLink}
          target='_blank'
          size='xl'
          leftIcon={FiDownloadCloud}
        >
          Download CV
        </ButtonLink>

        <ButtonLink
          href='#contact'
          variant='outline'
          size='xl'
          leftIcon={FiMail}
        >
          Hire me
        </ButtonLink>
      </div>
    </SectionCard>
  );
};

export default AboutSection;
