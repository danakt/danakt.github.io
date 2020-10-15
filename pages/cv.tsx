import { Heading } from '../components/Heading';
import { AsidePicture } from '../components/AsidePicture';
import { Page } from '../components/Page';
import { WithAside } from '../components/WidthAside';
import { Label } from '../components/Label';

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
          Если вы читаете это, значит в текущий момент я ищу работу. Коротко обо мне: всесторонне разбираюсь во
          фронтенде, люблю TypeScript и React, базово шарю в бэкенде, быстро адаптируюсь к новым технологиям, хорошо
          общаюсь с людьми.
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
        Я занимаюсь профессиональной разработкой на протяжении последних четырёх лет. За это время я научился находить
        общий язык практически с любым человеком. Готов отстаивать свою точку зрения, но также умею проигрывать и
        принимать чужую.
      </p>

      <p>
        Ищу себе крутую живую команду с интересным продуктом, на который можно активно влиять. Не привязываюсь к
        технологиям.
      </p>

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
        </a>
        .
      </p>

      <p>
        Работал в команде разработки инструментов для направления суперприложения. Написал и переделал несколько
        опенсорс-библиотек для разработки{' '}
        <a href="https://vk.com/services" target="_blank" rel="noopener noreferrer">
          миниаппов
        </a>
        . Участвовал в разработке ui-библиотеки <a href="https://github.com/VKCOM/VKUI">VKUI</a>.
      </p>

      <p>
        Разработал несколько разделов для MVP-версии новой платформы для дистанционного обучения{' '}
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

      <p>
        Работал в команде развития{' '}
        <a href="https://design.alfabank.ru" target="_blank" rel="noopener noreferrer">
          дизайн-системы
        </a>{' '}
        Альфа-Банка. Мейнтенил разработку ui-библиотеки{' '}
        <a href="https://github.com/alfa-laboratory/arui-feather" target="_blank" rel="noopener noreferrer">
          ARUI Feather
        </a>
        .
      </p>

      <p>
        Разработал новые внутренние продукты для сотрудников Альфа-Банка:{' '}
        <a href="https://design.alfabank.ru/news/mail-editor" target="_blank" rel="noopener noreferrer">
          конструктор писем
        </a>
        , конструктор баннеров, приложение для проверки орфографии и др. Использовал React, TypeScript, бэкенд на
        Node.js, интегрировал LDAP.
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
        Участвовал в поддержке одной из крупнейших (на 2018-й год) криптовалютных бирж{' '}
        <a href="https://hitbtc.com" target="_blank" rel="noopener noreferrer">
          HitBTC
        </a>
        . Переписал фронтенд нескольких разделов с jQuery на React.{' '}
      </p>

      <p>
        Разработал фронтенд и бэкенд мониторинг-системы криптовалютных игр. Использовал React, Typescript, Next.js,
        бэкенд на Node.js и MySQL.
      </p>

      <p>Разработал внутреннее приложение для удобного взаимодействия с финансовыми данными.</p>

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
        Разрабатывал B2B продукты для дистанционного обучения. Сделал интерактивные курсы для сотрудников Северстали и
        Газпрома. Разработал платформу для проведения вебинаров для бизнеса. Использовал jQuery, React, Typescript,
        работал с WebRTC.
      </p>

      <p>
        Поначалу работал как дизайнер/верстальщик, успел нарисовать несколько иллюстраций и интерфейсов веб-приложений в
        Adobe Photoshop.
      </p>

      <Heading>Некоммерческая деятельность</Heading>

      <p>
        Делаю сообщество для фронтенд-разработчиков в Петербурге{' '}
        <a href="https://twitter.com/spb_frontend" target="_blank" rel="noopener noreferrer">
          SPB Frontend
        </a>
        . С 2017-го года провожу фронтенд-завтраки (пока на паузе из-за карантина).
      </p>
      <p>
        Выступал с профориентационными лекциями для школьников в рамках «
        <a href="https://itday.tech-mail.ru" target="_blank" rel="noopener noreferrer">
          Дня ИТ-знаний
        </a>
        ».
      </p>

      <p>
        <br />
      </p>

      <p>
        <em>
          P.S. Если вы считаете, что в данном резюме чего-то не хватает, то пожалуйста,{' '}
          <a href="https://t.me/danakt">свяжитесь со мной</a>, я хочу чтобы моё резюме было максимально информативным.
          Спасибо!
        </em>
      </p>

      <p>
        <em>
          P.P.S. Богер, спасибо за{' '}
          <a
            href="https://www.notion.so/bogers/Ivan-Ivanov-Metameme-master-f04bc549371d4cdaaf7b97ce421eca18"
            target="_blank"
            rel="noopener noreferrer"
          >
            шаблон
          </a>{' '}
          {'<'}3
        </em>
      </p>
    </Page>
  );
}
