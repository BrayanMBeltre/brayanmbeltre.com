import { Project } from 'contentlayer/generated';

import ButtonLink from '@/components/links/ButtonLink';
import ProjectCard from '@/components/ProjectCard';
import SectionCard from '@/components/Sections/Card';

type WorksSectionProps = {
  data: Array<Project>;
};

const WorksSection = ({ data }: WorksSectionProps) => {
  return (
    <SectionCard title='Portfolio' id='works'>
      <ul className='grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3'>
        {data.map((work) => (
          <ProjectCard key={work._id} {...work} />
        ))}
      </ul>

      <div className='mt-[24px] flex justify-center'>
        <ButtonLink href='/projects'>View more</ButtonLink>
      </div>
    </SectionCard>
  );
};

export default WorksSection;
