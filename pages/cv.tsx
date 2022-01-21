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
          Коротко обо мне: всесторонне разбираюсь во фронтенде, люблю TypeScript и React, базово шарю в бэкенде, быстро
          адаптируюсь к новым технологиям, хорошо общаюсь с людьми.
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
        Я занимаюсь профессиональной разработкой с 2016 года. За это время я научился находить общий язык практически с
        любым человеком. Умею отстаивать свою точку зрения, но открыт и к чужой.
      </p>

      <p>
        Ищу себе крутую живую команду с интересным продуктом, на который можно активно влиять. Не привязываюсь к
        технологиям. Очень хочу изучать новые языки.
      </p>

      <p className="lead">Рассматриваю предложения от 280&nbsp;000&nbsp;₽.</p>

      <Heading>Опыт работы</Heading>

      <WithAside
        aside={
          <>
            <p>Апрель 2021 — настоящее время</p>

            <KeywordsWrapper>
              {['JavaScript', 'React', 'TypeScript'].map((item, i) => (
                <Keyword key={i}>{item}</Keyword>
              ))}
            </KeywordsWrapper>
          </>
        }
      >
        <Heading level={2}>Tinkoff</Heading>
      </WithAside>

      <p>Разрабатываю интерфейс для банкоматов</p>

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
                'JavaScript',
                'React',
                'TypeScript',
                'kPHP',
                'PHP',
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

      <p>
        Работал в команде API, разрабатывал новую платформу, которая, к сожалению, всё ещё под NDA. Поддерживал фронтенд
        сервиса для{' '}
        <a href="https://vk.com/cc" target="_blank" rel="noopener noreferrer">
          сокращения ссылок
        </a>
        , добавил QR-коды для сокращённых ссылок.
      </p>

      <p>
        Работал в команде разработки инструментов для направления суперприложения. Разрабатывал инструменты для
        взаимодействия ВК и <a href="https://vk.com/services">миниаппов</a> сторонних разработчиков. Поддерживал
        библиотеку{' '}
        <a href="https://github.com/vkcom/vk-bridge" target="_blank" rel="noopener noreferrer">
          VK Bridge
        </a>{' '}
        и связанные с ней: разработал для неё тайпинги событий для автосаджеста параметров в IDE пользователя
        библиотеки, переписал с событий на промисы, разработал Middleware API для создания промежуточных обработчиков
        событий. Разработал{' '}
        <a href="https://github.com/vkcom/vk-bridge-mock" target="_blank" rel="noopener noreferrer">
          библиотеку
        </a>{' '}
        для «мока» событий, написал{' '}
        <a href="https://github.com/VKCOM/vk-mini-apps-api" target="_blank" rel="noopener noreferrer">
          библиотеку
        </a>{' '}
        для упрощённого взаимодействия с VK Bridge. Участвовал в разработке UI-библиотеки{' '}
        <a href="https://github.com/VKCOM/VKUI" target="_blank" rel="noopener noreferrer">
          VKUI
        </a>
        , переписал большую часть библиотеки на TypeScript
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
                'JavaScript',
                'React',
                'TypeScript',
                'Next.js',
                'Node.js',
                'LDAP',
                'Docker',
                'Ramda',
                'Open Source',
                'Unit Testing',
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
        Альфа-Банка. Мейнтенил разработку UI-библиотеки{' '}
        <a href="https://github.com/alfa-laboratory/arui-feather" target="_blank" rel="noopener noreferrer">
          ARUI Feather
        </a>
        .
      </p>

      <p>
        Разработал новые внутренние продукты для сотрудников Альфа-Банка: конструкторы{' '}
        <a href="https://design.alfabank.ru/news/mail-editor" target="_blank" rel="noopener noreferrer">
          писем
        </a>
        , лендингов, баннеров, приложение для проверки орфографии. Конструкторы в дальнейшем сократили большое
        количество человеко-часов сотрудников, верстающих письма и лендинги.
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
                'JavaScript',
                'React',
                'TypeScript',
                'Flow',
                'Redux',
                'Node.js',
                'jQuery',
                'PHP',
                'Next.js',
                'MySQL',
                'Bash',
                'Docker',
                'Eherium',
                'Bitcoin',
                'Smart Contract',
                'Etherscan',
                'Open Source',
                'Unit Testing',
                'High Load',
                'ООП',
                'ФП',
                'Adobe Photoshop',
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
        . Впервые работал с хайлоад приложением. Переписал фронтенд нескольких разделов с jQuery на React.
      </p>

      <p>
        Нарисовал дизайн, разработал фронтенд и микросервисный бэкенд MVP-версии мониторинг-системы криптовалютных игр.
      </p>

      <p>Разработал внутреннее приложение для работы с финансовыми данными.</p>

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
                'JavaScript',
                'React',
                'TypeScript',
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
                'Unit Testing',
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
        Разрабатывал B2B продукты для дистанционного обучения сотрудников компаний. За время работы в ГиперМетоде вырос
        из верстальщика-дизайнера до полноценного JavaScript-разработчика.
      </p>

      <p>
        Нарисовал и разработал интерфейс для интерактивного курса для сотрудников Северстали, а также нарисовал
        несколько иллюстраций.
      </p>

      <p>
        Впервые применил React и внедрил его в старые продукты компании. Заменил в продуктах компании старый сборщик на
        Ruby на Webpack.
      </p>

      <p>
        Нарисовал дизайн и разработал лендинг для конструктора курсов. Разработал адаптивный шаблон для конструктора.
        Научился взаимодействовать с системами управления обучением при помощи SCORM.
      </p>

      <p>
        Разработал новый инструмент для проведения вебинаров для бизнеса. Впервые использовал TypeScript, обучился
        работе с WebRTC и веб-сокетами. Написал Chrome-расширение для записи вебинара преподавателем.
      </p>

      <Heading>Некоммерческая деятельность</Heading>

      <p>
        Делаю сообщество для фронтенд-разработчиков в Петербурге{' '}
        <a href="https://twitter.com/spb_frontend" target="_blank" rel="noopener noreferrer">
          SPB Frontend
        </a>
        . С 2017-го года провожу{' '}
        <a
          href="https://paperpaper.ru/photos/pyat-zavtrakov-v-peterburge-s-bespla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          фронтенд-завтраки
        </a>{' '}
        (пока на паузе из-за карантина).
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
          P.P.S.{' '}
          <a
            href="https://www.notion.so/Dima-Boger-Python-Team-Leader-ac2893048e944dcb90a337fb664d964e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Богер
          </a>
          , спасибо за{' '}
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
