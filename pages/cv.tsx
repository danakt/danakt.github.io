import { Heading } from '../components/Heading';
import { AsidePicture } from '../components/AsidePicture';
import { Page } from '../components/Page';
import { WithAside } from '../components/WidthAside';

export default function Cv() {
  return (
    <Page title="Резюме">
      <Heading>Привет, я Данакт, JavaScript&nbsp;разработчик</Heading>

      <WithAside
        aside={
          <AsidePicture
            src="/me2020.jpg"
            videoSrc="/me2020.mp4"
            videoType="video/mp4"
            description="Так я обычно выгляжу никогда "
          />
        }
      >
        <p>
          Если вы видите это, значит в текущий момент я ищу работу. Коротко обо мне: всесторонне умею во фронтенд, люблю
          TypeScript и React, базово умею в бэкенд, быстро адаптируюсь к новым технологиям, хорошо общаюсь с людьми.
        </p>
      </WithAside>

      <p>Ищу работу в Санкт-Петербурге или удалённо. Готов к командировкам, не готов к переезду.</p>

      <p>Со мной можно связаться:</p>

      <ul>
        <li>
          через телеграм:{' '}
          <a href="https://t.me/danakt" target="_blank" rel="noreferrer noopener">
            @danakt
          </a>{' '}
          <em>— предпочтительный способ связи</em>;
        </li>

        <li>
          по номеру телефона:{' '}
          <noindex>
            <a href="tel:+79520730288">+ 7 (952) 073–02–88</a>;
          </noindex>
        </li>
        <li>
          написав на почту:{' '}
          <noindex>
            <a href="mailto:danakt@danakt.com">danakt@danakt.com</a>.
          </noindex>
        </li>
      </ul>

      <p>
        Я занимаюсь профессиональной разработкой на протяжении последних четырёх лет. До этого около пяти лет увлекался
        разработкой в качестве хобби и делал сайты под ключ на фрилансе.
      </p>

      <p>Ищу себе крутую живую команду с интересным продуктом, на который можно активно влиять.</p>

      <p className="lead">Рассматриваю предложения от 230 000 ₽.</p>

      <Heading>Опыт работы</Heading>

      <WithAside
        aside={
          <>
            <p>
              Июнь 2019 — Октябрь 2020
              <br />
              <em>1 год 5 месяцев</em>
            </p>
          </>
        }
      >
        <Heading level={2}>ВКонтакте</Heading>
      </WithAside>

      <p>
        Работал в команде API, разрабатывал новую платформу, которая, к сожалению, всё ещё под NDA. Применял TypeScript,
        React и{' '}
        <a href="https://ru.wikipedia.org/wiki/KPHP" target="_blank" rel="noopener noreferrer">
          kPHP
        </a>{' '}
        <em>(компилируемая версия PHP от ВКонтакте)</em>.
      </p>

      <p>
        Работал в команде разработки инструментов для направления суперприложения. Писал и поддерживал
        опенсорс-библиотеки для разработки{' '}
        <a href="https://vk.com/services" target="_blank" rel="noopener noreferrer">
          миниаппов
        </a>
        . Участвовал в разработке ui-библиотеки VKUI.
      </p>

      <p>
        Также участвовал в разработке MVP-версии новой платформы для дистанционного обучения{' '}
        <a href="https://edu.vk.com" target="_blank" rel="noopener noreferrer">
          edu.vk.com
        </a>
        .
      </p>

      <WithAside
        aside={
          <>
            <p>
              Июнь 2018 — Июнь 2019
              <br />
              <em>1 год</em>
            </p>
          </>
        }
      >
        <Heading level={2}>Альфа-Банк</Heading>
      </WithAside>

      <p>Работал в команде развития дизайн-системы Альфа-Банка. Мейнтенил разработку ui-библиотеки «ARUI Feather».</p>

      <p>
        Разрабатывал новые внутренние продукты для сотрудников Альфа-Банка: конструкторы писем, баннеров, приложение для
        проверки орфографии и др. Использовал React, TypeScript, бэкенд на NodeJS, интегрировал LDAP.
      </p>

      <WithAside
        aside={
          <>
            <p>
              Октябрь 2017 — Июнь 2018
              <br />
              <em>9 месяцев</em>
            </p>
          </>
        }
      >
        <Heading level={2}>HitBTC</Heading>
      </WithAside>

      <p>
        Участвовал в поддержке одной из крупнейших криптовалютных бирж{' '}
        <a href="https://hitbtc.com" target="_blank" rel="noopener noreferrer">
          HitBTC
        </a>
        . Помимо этого участвовал в разработке новой ethereum-only биржи. Писал проекты связанные с крипто-играми.
        Разрабатывал внутренние финансовые приложения. Использовал Flow, TypeScript, React, PHP и ванильный JavaScript,
        писал бэкенд на NodeJS и MySQL.
      </p>

      <WithAside
        aside={
          <>
            <p>
              Июль 2016 — Октябрь 2017
              <br />
              <em>1 год 4 месяца</em>
            </p>
          </>
        }
      >
        <Heading level={2}>ГиперМетод</Heading>
      </WithAside>

      <p>
        Разрабатывал B2B продукты для автоматизации дистанционного обучения. Разрабатывал интерактивные курсы для
        сотрудников Северсталя и Газпрома. Разработал платформу для проведения вебинаров для бизнеса. Использовал
        jQuery, React, Typescript, работал с WebRTC.
      </p>

      <p>Поначалу работал как дизайнер/верстальщик, рисовал иллюстрации и интерфейсы приложений в Adobe Photoshop.</p>

      <Heading>Некоммерческая деятельность</Heading>

      <p>
        Делаю митапы в SPB Frontend, с 2017-го года провожу фронтенд-завтраки в СПб (пока на паузе из-за карантина).
      </p>
      <p>
        Выступал с профориентационными лекциями для школьников в рамках «
        <a href="https://itday.tech-mail.ru" target="_blank" rel="noopener noreferrer">
          Для ИТ-знаний
        </a>
        ».
      </p>

      <br />
      <p>
        <em>
          P.S. Если вы считаете, что в данном резюме чего-то не хватает, то пожалуйста,{' '}
          <a href="https://t.me/danakt">свяжитесь со мной</a>, я хочу чтобы моё резюме было максимально информативным.
          Спасибо :)
        </em>
      </p>
    </Page>
  );
}
