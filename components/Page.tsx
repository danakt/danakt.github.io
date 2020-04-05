import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';

const Body = styled.div`
  padding: 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 50%;
  flex: 0 0 50%;
  position: relative;
`;

const Breadcrumbs = styled.strong`
  font-size: 17px;
  font-weight: 400;
  font-style: italic;
`;

type Props = React.PropsWithChildren<{
  title: string;
}>;

export const Page = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700&display=swap&subset=cyrillic"
        />
      </Head>

      <GlobalStyles />

      <Body>
        <Breadcrumbs>
          {router.pathname === '/' ? (
            'Главная'
          ) : (
            <>
              <Link href="/">
                <a>Главная</a>
              </Link>
              &nbsp;/&nbsp;{props.title}
            </>
          )}
        </Breadcrumbs>
        <Wrapper>
          <Content>{props.children}</Content>
        </Wrapper>
      </Body>
    </>
  );
};
