import { Page } from '../components/Page';
import Link from 'next/link';
import { Me } from '../components/Me';
import { WithAside } from '../components/WidthAside';
import { useEffect, Fragment } from 'react';
import { useMetrika } from '../hooks/useMetrika';
import { Heading } from '../components/Heading';

const socials = [
  {
    url: 'https://vk.com/danakt',
    title: (
      <>профиль ВКонтакте; веду там рабочие переписки, и если вы мне напишите туда, то скорее всего я этого не увижу;</>
    ),
  },
  { url: 'https://t.me/danakt', title: <>так что писать, желательно, в телегу;</> },

  { url: 'https://github.com/danakt', title: <>код почти всего, что я делаю не под NDA, находится на гитхабе;</> },
  { url: 'https://twitter.com/danakt_frost', title: <>все покеки из головы выкладываю в твиттер;</> },
  {
    url: 'https://instagram.com/danakt_frost',
    title: <>также, можно подписаться на мой инстаграм, который я обновляю время от времени.</>,
  },
];

const someLinks = [
  { title: 'За ВДВ', url: 'https://twitter.com/danakt_frost/status/1289817944550064128' },
  { title: 'ПШЕ', url: 'https://пше.рф' },
  { title: 'Данакт FAQ', url: '/danakt' },
];

export default function Index() {
  return (
    <Page title="Да это же Данакт">
      <Heading>Привет!</Heading>

      <WithAside aside={<Me />}>
        <p>
          Меня зовут{' '}
          <Link href="/danakt">
            <a href="/danakt" title="Данакт FAQ">
              Данакт
            </a>
          </Link>
          , я программист <a href="https://vk.com/about">ВКонтакте</a>.
        </p>
      </WithAside>

      <Heading>Зачем этот сайт нужен?</Heading>
      <p>
        Я купил домены{' '}
        <a href="//danakt.com" className="always-fresh">
          danakt.com
        </a>{' '}
        и{' '}
        <a href="//danakt.ru" className="always-fresh">
          danakt.ru
        </a>
        , чтобы их никто не занял вместо меня. А коли купил, надо чтобы что-то здесь было. Ну и еще для того, чтобы
        здесь были мои контакты.
      </p>

      <Heading>Мои контакты</Heading>
      <ul>
        {socials.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.url.replace(/^https?:\/\//, '')}</a> — {item.title}
          </li>
        ))}
      </ul>

      {/* <Heading>Какие-то ссылки</Heading>
      <div>
        {someLinks.map((item, i) => (
          <Fragment key={i}>
            {i > 0 && <> - </>}
            <a href={item.url}>{item.title}</a>
          </Fragment>
        ))}
      </div> */}
    </Page>
  );
}
