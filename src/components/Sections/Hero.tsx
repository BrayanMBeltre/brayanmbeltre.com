import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { SlGrid } from 'react-icons/sl';
import Balancer from 'react-wrap-balancer';

import { userData } from '@/data/user';

import ButtonLink from '@/components/links/ButtonLink';
import SectionCard from '@/components/Sections/Card';

const Hero = () => {
  return (
    <SectionCard id='/' className='relative'>
      <Image
        priority
        src='/images/hero.png'
        alt='Hero'
        fill
        className='object-cover'
        draggable={false}
      />

      <div className='absolute h-full w-full bg-[#282828] opacity-90' />

      <div className='relative flex h-full w-full items-center justify-center px-[30px] py-[60px] sm:absolute'>
        <div className='max-w-[600px] space-y-4  text-[#ebdbb2]'>
          <h1>
            {userData.greeting}
            <span className='text-primary-600 text-7xl'>.</span>{' '}
          </h1>

          <p>
            <Balancer>{userData.description}</Balancer>
          </p>

          <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
            <ButtonLink href='#works' leftIcon={SlGrid} size='xl'>
              View Portfolio
            </ButtonLink>

            <ButtonLink
              variant='outline'
              href='mailto:brayanmbeltre@gmail.com'
              leftIcon={AiOutlineMail}
              size='xl'
            >
              Hire me
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default Hero;
