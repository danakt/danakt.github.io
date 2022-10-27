import { PageLayout } from '../components/PageLayout';
import { AsidePicture } from '../components/AsidePicture';
import { WithAside } from '../components/WidthAside';
import { Heading } from '../components/Heading';

export default function Index() {
  return (
    <PageLayout title="Danakt" lang="en">
      <Heading>Hello!</Heading>

      <WithAside aside={<AsidePicture src="/me2016.jpg" description="This is me in 2016" />}>
        <p>My name is Danakt, I'm a programmer.</p>
      </WithAside>

      <Heading>Why is this site needed?</Heading>

      <p>
        I bought the{' '}
        <a href="//danakt.com" className="always-fresh">
          danakt.com
        </a>{' '}
        {/* and{' '}
        <a href="//danakt.ru" className="always-fresh">
          danakt.ru
        </a>{' '} */}
        domain so that no one would take they instead of me. And if I bought it, I need to have something here. Well,
        and also in order to have my contacts here.
      </p>

      <Heading>My contacts</Heading>

      <ul>
        <li>
          <a href="https://t.me/danakt">Telegram</a> — the best way to contact me;
        </li>

        <li>
          <a href="https://twitter.com/_danakt">Twitter</a> — sometimes write here;
        </li>

        <li>
          <a href="https://instagram.com/danakt_saushkin">Instagram</a> — sometimes publish photos here;
        </li>

        <li>
          <a href="https://github.com/danakt">GitHub</a> — sometimes publish code written in my spare time.
        </li>
      </ul>
    </PageLayout>
  );
}
