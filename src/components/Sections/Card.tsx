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
      title={title}
      id={id}
      className={clsxm(
        'section rounded-[20px] bg-white shadow-lg',
        'sm:min-h-[620px]',
        'mb-[50px]',
        'overflow-hidden',
        className
      )}
    >
      {title && title}

      {children}
    </section>
  );
};

export default SectionCard;
