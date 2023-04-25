import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type LinkProps = {
  link: boolean;
  children: ReactNode;
} & UnstyledLinkProps;

const Link = ({ link, children, ...rest }: LinkProps) => {
  if (link) return <UnstyledLink {...rest}>{children}</UnstyledLink>;
  return <>{children}</>;
};

export const ProjectCard = ({
  featuredImage,
  title,
  category,
  slug,
  url,
  body,
}: Project) => (
  <li
    className={clsxm(
      'overflow-hidden rounded-lg',
      'mx-auto w-fit',
      'group relative',
      'h-[195px] w-[259px]'
    )}
  >
    <Link
      link={!!url || !!body.raw}
      openNewTab={url && !body.raw ? true : false}
      href={url && !body.raw ? url : `/projects/${slug}`}
    >
      <Image
        src={featuredImage}
        width={284.9}
        height={214.5}
        draggable={false}
        alt={title}
        className={clsxm(
          'absolute z-10 group-hover:scale-110',
          'transition-transform duration-300'
        )}
      />

      <div
        className={clsxm(
          'bg-primary-600 absolute z-20 h-full w-full',
          'opacity-0 group-hover:opacity-90',
          'transition-all duration-200',
          'px-[25px] py-[25px]',
          'text-white'
        )}
      >
        <p
          className={clsxm(
            'translate-y-6 group-hover:translate-y-0',
            'transition-transform duration-200'
          )}
        >
          <Balancer>{title}</Balancer>
        </p>
        <p
          className={clsxm(
            'translate-y-6 group-hover:translate-y-0',
            'transition-transform duration-300'
          )}
        >
          {category}
        </p>
      </div>

      {/* <div className={clsxm()}></div> */}
    </Link>
  </li>
);

export default ProjectCard;
