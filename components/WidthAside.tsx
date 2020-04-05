import styled from 'styled-components';
import { PropsWithChildren, ReactNode } from 'react';

export const Aside = styled.div.attrs({ className: 'sans-serif' })`
  position: absolute;
  left: 120%;
  width: 40%;
  top: 0;
  margin-top: 8px;
  font-size: 16px;

  @media (max-width: 1310px) {
    position: static;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

type Props = PropsWithChildren<{
  aside: ReactNode;
}>;

export const WithAside = (props: Props) => (
  <Wrapper>
    <Aside>{props.aside}</Aside>
    {props.children}
  </Wrapper>
);
