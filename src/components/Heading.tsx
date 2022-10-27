import styled from 'styled-components';
import { ReactNode, PropsWithChildren } from 'react';

const HeadingLabel = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 30px;
  letter-spacing: 1.2px;
`;

const H1 = styled.h1`
  margin: 60px 0 10px;
  font-size: 34px;
  line-height: 1.25;

  @media (max-width: 590px) {
    margin-top: 45px;
    font-size: 21px;
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  margin: 50px 0 0;

  @media (max-width: 590px) {
    font-size: 18px;
    margin-top: 37.5px;
  }
`;

type Props = PropsWithChildren<{
  level?: 1 | 2;
  label?: ReactNode;
}>;

export const Heading = (props: Props) => {
  const level = props.level ?? 1;

  const contentRender = (
    <>
      {props.label != null && <HeadingLabel>{props.label}</HeadingLabel>}
      {props.children}
    </>
  );

  return level === 1 ? <H1>{contentRender}</H1> : <H2>{contentRender}</H2>;
};
