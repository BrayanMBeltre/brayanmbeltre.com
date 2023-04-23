import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SectionCard from '@/components/Sections/Card';
import Seo from '@/components/Seo';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );

  return { props: { project } };
};

export default function ProjectsPage({ project }: { project: Project }) {
  return (
    <Layout>
      <Seo templateTitle={project.title} />

      <SectionCard title={project.title} id='works'>
        <NextImage
          fill
          src={project.featuredImage}
          alt={project.title}
          className='relative h-[600px] w-full '
          imgClassName='object-cover rounded'
        />

        <div
          className='prose prose-lg my-[40px]'
          dangerouslySetInnerHTML={{ __html: project.body.html }}
        />

        <div className='absolute bottom-[8px] right-0 mb-4 flex w-full  justify-between  px-[50px]'>
          <ButtonLink href='/projects' leftIcon={FiChevronLeft}>
            Back
          </ButtonLink>

          {project.url && (
            <ButtonLink
              href={project.url}
              openNewTab
              rightIcon={FiChevronRight}
            >
              Visit
            </ButtonLink>
          )}
        </div>
      </SectionCard>
    </Layout>
  );
}
