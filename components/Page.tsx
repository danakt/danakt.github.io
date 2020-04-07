import { Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';
import { Metrika } from './Metrika';

const Body = styled.div`
  padding: 30px 0 100px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 50%;
  flex: 0 0 auto;
  position: relative;

  @media (max-width: 1310px) {
    width: 62.5%;
  }

  @media (max-width: 1150px) {
    width: 75%;
  }

  @media (max-width: 980px) {
    width: 100%;
  }
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
  const ogImage = `https://motif.imgix.com/i?url=https://danakt.com${router.route}&image_url=null&color=ffffff&logo_url=&logo_alignment=bottom%2Cright&text_alignment=middle%2Ccenter&logo_padding=0&font_family=Charter&text_color=000`;

  return (
    <>
      <Head>
        <title>{props.title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700&display=swap&subset=cyrillic"
        />

        {/* Open Graph */}
        <meta name="og:title" content={props.title} />
        <meta name="og:url" content="https://danakt.com" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={ogImage}></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:site" content="@danakt_frost" />
        <meta name="twitter:image:src" content={ogImage} />
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

        <Metrika />
      </Body>
    </>
  );
};
