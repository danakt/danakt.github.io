import { Page } from '../components/Page';
import Head from 'next/head';
import { Me } from '../components/Me';
import { WithAside } from '../components/WidthAside';

export default () => {
  const socials = [
    {
      title: 'ВК',
      url: 'https://vk.com/danakt',
    },
    {
      title: 'Гитхаб',
      url: 'https://github.com/danakt',
    },
    {
      title: 'Твиттер',
      url: 'https://twitter.com/danakt_frost',
    },
    {
      title: 'Телега',
      url: 'https://t.me/danakt',
    },
    {
      title: 'Инста',
      url: 'https://instagram.com/danakt_frost',
    },
  ];

  return (
    <Page title="Да это же Данакт">
      <h1>Привет!</h1>

      <WithAside aside={<Me />}>
        <p>
          Меня зовут <a href="/danakt">Данакт</a>, я программист ВКонтакте.
        </p>
      </WithAside>

      <h1>Зачем этот сайт нужен?</h1>
      <p>
        Я купил домены{' '}
        <a href="/" className="always-fresh">
          danakt.com
        </a>{' '}
        и{' '}
        <a href="/" className="always-fresh">
          danakt.ru
        </a>
        , чтобы их никто не занял вместо меня. А коли купил, надо чтобы что-то здесь было. Ну и еще для того, чтобы
        здесь были мои контакты.
      </p>

      <h1>Мои контакты</h1>
      <ul>
        {socials.map((item, i) => (
          <li key={i}>
            {item.title} —{' '}
            <a className="always-fresh" href={item.url}>
              {item.url.replace(/^https?:\/\//, '')}
            </a>
          </li>
        ))}
      </ul>
    </Page>
  );
};
