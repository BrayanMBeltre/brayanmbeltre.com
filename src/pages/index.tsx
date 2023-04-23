import { allProjects } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Layout from '@/components/layout/Layout';
import AboutSection from '@/components/Sections/About';
import ContactSection from '@/components/Sections/Contact';
import Experience from '@/components/Sections/Experience';
import Funfacts from '@/components/Sections/Funfacts';
import Hero from '@/components/Sections/Hero';
import SkillsSection from '@/components/Sections/Skills';
import WorksSection from '@/components/Sections/Works';
import Seo from '@/components/Seo';

export async function getStaticProps() {
  const projects = allProjects.slice(0, 6);
  return { props: { projects } };
}

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
    </Layout>
  );
}
