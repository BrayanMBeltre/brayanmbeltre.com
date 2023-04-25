import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type SectionCardProps = {
  title?: string;
  id: string;
  children: ReactNode;
  className?: string;
};

const SectionCard = ({ title, id, children, className }: SectionCardProps) => {
  return (
    <section
      // title={title}
      className={clsxm(
        ' relative rounded-[20px] bg-[#282828] shadow-lg dark:bg-[#1d2021]',
        'sm:min-h-[620px]',
        'mb-[50px]',
        'overflow-hidden',
        title ? 'px-[50px] py-[80px]' : '',
        className
      )}
    >
      <div className='section absolute -top-[48px]' id={id} />

      {title && (
        <div className='mb-[50px]'>
          <h2 className='font-bold text-[#ebdbb2]'>{title}</h2>
          <div className='bg-primary-600 mt-[14px] h-[5px] w-[30px] rounded-[25px]' />
        </div>
      )}

      {children}
    </section>
  );
};

export default SectionCard;
