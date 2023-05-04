import { allProjects } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/Sections/Hero';
import Seo from '@/components/Seo';

export async function getStaticProps() {
  const projects = allProjects.slice(0, 6);
  return { props: { projects } };
}
const AboutSection = dynamic(() => import('@/components/Sections/About'));
const SkillsSection = dynamic(() => import('@/components/Sections/Skills'));
const Funfacts = dynamic(() => import('@/components/Sections/Funfacts'));
const Experience = dynamic(() => import('@/components/Sections/Experience'));
const WorksSection = dynamic(() => import('@/components/Sections/Works'));
const ContactSection = dynamic(() => import('@/components/Sections/Contact'));

export default function HomePage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo />

      <Hero />

      <AboutSection />

      <SkillsSection />

      <Funfacts />

      <Experience />

      <WorksSection data={projects} />

      <ContactSection />
      <div className='mb-[100px]' />
    </Layout>
  );
}
