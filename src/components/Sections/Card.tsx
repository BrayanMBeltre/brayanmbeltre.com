import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  id: string;
  children: ReactNode;
};

const SectionCard = ({ title, id, children }: SectionCardProps) => {
  return (
    <section
      title={title}
      id={id}
      className='section h-screen rounded-xl bg-white shadow-lg'
    >
      {title}
      <div>{children}</div>
    </section>
  );
};

export default SectionCard;
