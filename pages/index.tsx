import { Page } from '../components/Page';
import Link from 'next/link';
import { Me } from '../components/Me';
import { WithAside } from '../components/WidthAside';
import { Heading } from '../components/Heading';

const socials = [
  { url: 'https://t.me/danakt', name: 'Телеграм', description: <>лучший способ со мной связаться;</> },

  { url: 'https://twitter.com/danakt_frost', name: 'Твиттер', description: <>сюда иногда пишу;</> },
  {
    url: 'https://instagram.com/danakt_frost',
    name: 'Инстаграм',
    description: <>сюда иногда выкладываю фото;</>,
  },
  {
    url: 'https://github.com/danakt',
    name: 'Гитхаб',
    description: <>сюда иногда выкладываю написанный в свободное время код.</>,
  },
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
          , я программист.
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

      <p>
        <ul>
          {socials.map((item, i) => (
            <li key={i}>
              <a href={item.url}>{item.name}</a> — {item.description}
            </li>
          ))}
        </ul>
      </p>

      <p>
        Также, вы можете написать мне на почту: <a href="mailto: danakt@danakt.com">danakt@danakt.com</a>.
      </p>
    </Page>
  );
}
