import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { usePageViews } from '../hooks/usePageViews';
import { Heading } from '../components/Heading';

export default function Danakt() {
  const { route } = useRouter();
  const views = usePageViews(route);

  return (
    <Page title="Данакт FAQ">
      <Heading>Данакт FAQ</Heading>

      <Heading level={2}>А как тебя на самом деле зовут?</Heading>
      <p>
        <em>Дана́кт</em> — моё настоящее имя, данное мне при рождении.
      </p>

      <Heading level={2}>Ты не русский?</Heading>
      <p>Я русский.</p>

      <Heading level={2}>А имя чьё?</Heading>
      <p>
        <em>Данакт</em> это мужское русское личное имя греческого происхождения, восходит к др.-греч. Δάναξ (родительный
        падеж Δάνακτος). Было взято моими родителями из православного именослова.
      </p>

      <Heading level={2}>А что оно обозначает?</Heading>
      <p>Ничего.</p>

      <Heading level={2}>Никогда не слышал(а).</Heading>
      <p>Я тоже.</p>

      <p>
        В именослов имя <em>Данакт</em> попало благодаря христианскому мученику Данакту (Данаксу) Иллирийскому, который
        был убит во время гонений на христиан.
      </p>

      <p>Практически не употребляется в настоящее время.</p>

      <Heading level={2}>А друзья тебя как называют?</Heading>

      <p>
        В основном <em>Данакт</em>. Некоторые близкие друзья называют <em>Дан</em>. Бабушка — <em>Данюша</em>.
      </p>

      <p>
        <br />
      </p>

      <p>
        <em>
          А вообще, я запарился и написал более подробную статью в{' '}
          <a href="https://ru.wikipedia.org/wiki/Данакт" target="_blank" rel="noreferrer noopener">
            Википедии
          </a>
          .
        </em>
      </p>
    </Page>
  );
}
