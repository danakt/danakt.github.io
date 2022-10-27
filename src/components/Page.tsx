import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { LinkDesc } from '../types/linkDesc';

const Body = styled.div`
  padding: 30px 0 100px;
`;

const Main = styled.main`
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

const Header = styled.header`
  display: flex;
`;

const Breadcrumbs = styled.strong`
  flex: 1 1 auto;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 590px) {
    font-size: 16px;
  }
`;

type Props = React.PropsWithChildren<{
  title: string;
  lang?: 'en' | 'ru';
  navigation?: LinkDesc[];
}>;

export const Page = (props: Props) => {
  const lang = props.lang ?? 'ru';
  const name = lang === 'en' ? 'Danakt' : 'Данакт';
  const router = useRouter();
  const ogImage = `https://motif.imgix.com/i?url=https://danakt.com${router.route}&image_url=null&color=ffffff&logo_url=&logo_alignment=bottom%2Cright&text_alignment=middle%2Ccenter&logo_padding=0&font_family=Charter&text_color=000`;

  return (
    <>
      <Head>
        <title>{props.title}</title>

        <link rel="icon" type="image/png" href="/favicon.png" />

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

        {/* Metrika */}
        <script src="/metrika.js" />
      </Head>

      <GlobalStyles />

      <Body>
        {/* Metrika */}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/38138395" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

        <Header>
          <Breadcrumbs>
            {router.pathname === '/' ? (
              name
            ) : (
              <>
                <Link href="/">
                  <a className="always-fresh">{name}</a>
                </Link>
                &nbsp;/&nbsp;{props.title}
              </>
            )}
          </Breadcrumbs>

          {props.navigation && <Navigation links={props.navigation} />}
        </Header>

        <Main>
          <Content>{props.children}</Content>
        </Main>
      </Body>
    </>
  );
};
