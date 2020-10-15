import { Heading } from '../components/Heading';
import { AsidePicture } from '../components/AsidePicture';
import { Page } from '../components/Page';
import { WithAside } from '../components/WidthAside';
import { Keyword } from '../components/Keyword';
import { KeywordsWrapper } from '../components/KeywordsWrapper';

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
        общий язык практически с любым человеком. Умею отстаивать свою точку зрения, однако открыт к чужой.
      </p>

      <p>
        Ищу себе крутую живую команду с интересным продуктом, на который можно активно влиять. Не привязываюсь к
        технологиям.
      </p>

      <p className="lead">Рассматриваю предложения от 230&nbsp;000&nbsp;₽.</p>

      <Heading>Опыт работы</Heading>

      <WithAside
        aside={
          <>
            <p>
              Июнь 2019 — Октябрь 2020
              <br />
              <em>1 год 5 месяцев</em>
            </p>

            <KeywordsWrapper>
              {[
                'Javascript',
                'React',
                'Typescript',
                'PHP',
                'kPHP',
                'Open Source',
                'UI Kit',
                'Node.js',
                'ООП',
                'ФП',
                'Super App',
              ].map((item, i) => (
                <Keyword key={i}>{item}</Keyword>
              ))}
            </KeywordsWrapper>
          </>
        }
      >
        <Heading level={2}>ВКонтакте</Heading>
      </WithAside>

      <p>Работал в команде API, разрабатывал новую платформу, которая, к сожалению, всё ещё под NDA.</p>

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

            <KeywordsWrapper>
              {[
                'Javascript',
                'React',
                'Typescript',
                'Next.js',
                'Node.js',
                'LDAP',
                'Docker',
                'Ramda',
                'Open Source',
                'Unit testing',
                'UI Kit',
                'ФП',
              ].map((item, i) => (
                <Keyword key={i}>{item}</Keyword>
              ))}
            </KeywordsWrapper>
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
        , конструктор баннеров, приложение для проверки орфографии и др.
      </p>

      <WithAside
        aside={
          <>
            <p>
              Октябрь 2017 — Июнь 2018
              <br />
              <em>9 месяцев</em>
            </p>

            <KeywordsWrapper>
              {[
                'Javascript',
                'React',
                'Typescript',
                'Flow',
                'Redux',
                'Node.js',
                'jQuery',
                'PHP',
                'Next.js',
                'MySQL',
                'Bash',
                'Eherium',
                'Bitcoin',
                'Smart Contract',
                'Etherscan',
                'Open Source',
                'Unit Testing',
                'High Load',
                'ООП',
                'ФП',
              ].map((item, i) => (
                <Keyword key={i}>{item}</Keyword>
              ))}
            </KeywordsWrapper>
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

      <p>Разработал фронтенд и микросервисный бэкенд мониторинг-системы криптовалютных игр.</p>

      <p>Разработал внутреннее приложение для финансовых данных.</p>

      <WithAside
        aside={
          <>
            <p>
              Июль 2016 — Октябрь 2017
              <br />
              <em>1 год 4 месяца</em>
            </p>

            <KeywordsWrapper>
              {[
                'Javascript',
                'React',
                'Typescript',
                'Redux',
                'MobX',
                'jQuery',
                'Node.js',
                'SCORM',
                'WebRTC',
                'TURN',
                'STUN',
                'ООП',
                'WebSocket',
                'Adobe Photoshop',
                'Unit testing',
                'Chrome extentions',
                'SVG',
              ].map((item, i) => (
                <Keyword key={i}>{item}</Keyword>
              ))}
            </KeywordsWrapper>
          </>
        }
      >
        <Heading level={2}>ГиперМетод</Heading>
      </WithAside>

      <p>
        Разрабатывал B2B продукты для дистанционного обучения. Сделал интерактивные курсы для сотрудников Северстали и
        Газпрома. Разработал платформу для проведения вебинаров для бизнеса. Разработал Google Chome расширение для
        удобного взаимодействия ведущего с вебинаром.
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
