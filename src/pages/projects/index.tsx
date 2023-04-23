import { allProjects } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Layout from '@/components/layout/Layout';
import ProjectCard from '@/components/ProjectCard';
import SectionCard from '@/components/Sections/Card';
import Seo from '@/components/Seo';

export async function getStaticProps() {
  const projects = allProjects;
  return { props: { projects } };
}

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <SectionCard title='Portfolio' id='works'>
        <ul className='grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((work) => (
            <ProjectCard key={work._id} {...work} />
          ))}
        </ul>
      </SectionCard>
    </Layout>
  );
}
