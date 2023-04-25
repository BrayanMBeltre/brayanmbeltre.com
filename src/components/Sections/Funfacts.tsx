import { createElement } from 'react';

import clsxm from '@/lib/clsxm';

import { funfactsData } from '@/data/funfacts';

type FunfactItemProps = (typeof funfactsData)[number];

const FunfactItem = ({ count, icon, label, prefix }: FunfactItemProps) => (
  <li className='flex flex-col items-center  text-white dark:text-[#ebdbb2]'>
    <div className='bg-primary-600 rounded-full p-4'>
      {createElement(icon, {
        className: clsxm(`h-8 w-8 dark:text-[#1d2021]`),
      })}
    </div>

    <h2 className='mt-[12px]'>
      {prefix}
      {count}
    </h2>

    <p className='mt-[7px] text-center'>{label}</p>
  </li>
);

const Funfacts = () => {
  return (
    <section className='mb-[50px] rounded-[20px] bg-[#282828] p-[50px] dark:bg-[#1d2021]'>
      <ul className='grid grid-cols-2 gap-[40px] lg:grid-cols-4'>
        {funfactsData.map((funfact) => (
          <FunfactItem key={funfact.label} {...funfact} />
        ))}
      </ul>
    </section>
  );
};

export default Funfacts;
