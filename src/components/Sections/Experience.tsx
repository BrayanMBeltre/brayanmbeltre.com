import Balancer from 'react-wrap-balancer';

import clsxm from '@/lib/clsxm';

import { experienceData } from '@/data/user';

import SectionCard from '@/components/Sections/Card';

type ExperienceItemProps = {
  isFirst: boolean;
} & (typeof experienceData)[number];

const ExperienceItem = ({
  date,
  description,
  title,
  isFirst,
}: ExperienceItemProps) => (
  <li className='mb-10 ml-4'>
    <div
      className={clsxm(
        'border-primary-600 absolute -left-1.5  h-3 w-3 rounded-full border ',
        isFirst ? 'bg-primary-600 mt-0' : 'mt-[1px] bg-white dark:bg-[#1d2021]'
      )}
    />

    <time className=' text-sm font-normal leading-none text-[#333333] dark:text-[#bdae93]'>
      <Balancer>{date}</Balancer>
    </time>

    <h3 className=' text-gray-900 dark:text-[#ebdbb2]'>{title}</h3>

    <p className='text-base font-normal text-[#333333] dark:text-[#d5c4a1]'>
      {description}
    </p>
  </li>
);

const Experience = () => {
  return (
    <SectionCard title='Experience' id='resume'>
      <ol className='border-primary-600 relative border-l'>
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={experience.title}
            isFirst={index === 0}
            {...experience}
          />
        ))}

        <li className='ml-4 h-[6px]'>
          <div className='border-primary-600 bg-primary-600 absolute -left-[4px] mt-1.5 h-2 w-2 rounded-full border' />
        </li>
      </ol>
    </SectionCard>
  );
};

export default Experience;
