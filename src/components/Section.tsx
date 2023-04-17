import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  id: string;
  children: ReactNode;
};

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section
      title={title}
      id={id}
      className='h-screen rounded-xl bg-white shadow-lg'
    >
      {title}
      <div>{children}</div>
    </section>
  );
};

export default Section;
