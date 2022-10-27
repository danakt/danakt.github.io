import Link from 'next/link';
import React, { ReactNode } from 'react';
import { LinkDesc } from '../types/linkDesc';

type Props = {
  links?: LinkDesc[];
  items: ReactNode[];
};

export const Navigation = (props: Props) => {
  return (
    <nav>
      {/* {props.links.map((linkDesc, i) => (
        <React.Fragment key={i}>
          {'href' in linkDesc ? (
            <Link href={linkDesc.href}>
              <a>{linkDesc.title}</a>
            </Link>
          ) : (
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                linkDesc.onClick();
              }}
            >
              {linkDesc.title}
            </a>
          )}
        </React.Fragment>
      ))} */}

      {props.items}
    </nav>
  );
};
