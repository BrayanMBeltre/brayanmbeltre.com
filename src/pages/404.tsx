import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import SectionCard from '@/components/Sections/Card';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <SectionCard id='404' className='flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />

          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>

          <ArrowLink className='mt-4 md:text-lg' href='/'>
            Back to Home
          </ArrowLink>
        </div>
      </SectionCard>
    </Layout>
  );
}
