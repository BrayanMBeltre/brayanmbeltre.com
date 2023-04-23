import { createElement } from 'react';

import clsxm from '@/lib/clsxm';

import { skillsData } from '@/data/skills';
import { userData } from '@/data/user';

import SectionCard from '@/components/Sections/Card';

type SkillItemProps = {
  isLast: boolean;
} & (typeof skillsData)[number];

const SkillItem = ({ icon, name, isLast }: SkillItemProps) => (
  <li className='flex flex-col items-center'>
    {createElement(icon, {
      className: clsxm(
        `h-8 w-8 text-primary-600 ${
          isLast ? 'animate-[spin_3s_linear_infinite]' : ''
        }`
      ),
    })}

    <p className=' font-bold uppercase'>{name}</p>
  </li>
);

const SkillsSection = () => {
  return (
    <SectionCard title='My skills' id='about'>
      <p className='mt-[24px]  text-[#888888]'>{userData.skillsSectionText}</p>

      {}
      <ul className='mt-[50px] grid grid-cols-2 gap-[80px] md:grid-cols-4'>
        {skillsData.map((skill, index) => (
          <SkillItem
            key={skill.name}
            {...skill}
            isLast={skillsData.length - 1 === index}
          />
        ))}
      </ul>
    </SectionCard>
  );
};

export default SkillsSection;
