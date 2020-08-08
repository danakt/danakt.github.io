import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { WithAside } from '../components/WidthAside';
import { usePageViews } from '../hooks/usePageViews';

export default function Danakt() {
  const { route } = useRouter();
  const views = usePageViews(route);

  return (
    <Page title="Данакт FAQ">
      <h1>Данакт FAQ</h1>

      <h2>А как тебя на самом деле зовут?</h2>
      <WithAside aside={<>{typeof views === 'number' && views > -1 && <>{views} просмотров</>}</>}>
        <p>
          <em>Дана́кт</em> — моё настоящее имя, данное мне при рождении.
        </p>
      </WithAside>

      <h2>Ты не русский?</h2>
      <p>Я русский.</p>

      <h2>А имя чьё?</h2>
      <p>
        <em>Данакт</em> это мужское русское личное имя греческого происхождения, восходит к др.-греч. Δάναξ (родительный
        падеж Δάνακτος). Было взято моими родителями из православного именослова.
      </p>

      <h2>А что оно обозначает?</h2>
      <p>Ничего.</p>

      <h2>Никогда не слышал(а).</h2>
      <p>Я тоже.</p>

      <p>
        В именослов имя <em>Данакт</em> попало благодаря христианскому мученику Данакту (Данаксу) Иллирийскому, который
        был убит во время гонений на христиан.
      </p>

      <p>Практически не употребляется в настоящее время.</p>

      <h2>А друзья тебя как называют?</h2>

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
