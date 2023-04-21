import * as React from 'react';

import Layout from '@/components/layout/Layout';
import SectionCard from '@/components/Sections/Card';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <div id='/' className='section h-[600px]'>
        hero
      </div> */}

      <SectionCard id='works'>
        <div>Work list</div>
      </SectionCard>
    </Layout>
  );
}
