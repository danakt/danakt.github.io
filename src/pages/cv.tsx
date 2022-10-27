import { Heading } from '../components/Heading';
import { AsidePicture } from '../components/AsidePicture';
import { Page } from '../components/Page';
import { WithAside } from '../components/WidthAside';
import { Keywords } from '../components/Keywords';

const CvMarkup = () => {
  return (
    <>
      <WithAside
        aside={
          <>
            <AsidePicture
              src="/me2020.jpg"
              videoSrc="/me2020.mp4"
              videoType="video/mp4"
              description="This is how I usually never look"
            />

            <p>
              <strong>Contacts:</strong>
            </p>

            <ul>
              <li>Almaty, Kazakhstan</li>

              <li>
                Phone:{' '}
                <noindex>
                  <a href="tel:+77054346140">+7 (705) 434-61-40</a>
                </noindex>
              </li>

              <li>
                Email:{' '}
                <noindex>
                  <a href="mailto:danakt@protonmail.com">danakt@protonmail.com</a>
                </noindex>
              </li>

              <li>
                Telegram:{' '}
                <a href="https://t.me/danakt" target="_blank" rel="noreferrer noopener">
                  @danakt
                </a>
                <br />
                <em>(quick response)</em>
              </li>

              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/danakt/" target="_blank" rel="noreferrer noopener">
                  linkedin.com/in/danakt
                </a>
              </li>

              <li>
                GitHub:{' '}
                <a href="https://github.com/danakt" target="_blank" rel="noreferrer noopener">
                  github.com/danakt
                </a>
              </li>
            </ul>

            <p>
              <strong>Languages</strong>
            </p>

            <ul>
              <li>
                <strong>English</strong>: Intermediate
              </li>
              <li>
                <strong>Russian</strong>: Native
              </li>
            </ul>
          </>
        }
      >
        <Heading>Danakt Saushkin</Heading>

        <p>
          JavaScript developer with over six years of professional development experience seeking remote full-time
          frontend developer position
        </p>
      </WithAside>

      <Heading>Overview</Heading>

      <p>
        I have been a professional JavaScript developer since 2016. My work experience includes working on high-load
        services, complex B2C applications for daily use, banking applications, B2B products, open-source libraries,
        also a lot of html/css development in accordance with modern standards and practices.
      </p>

      <p>
        I love <strong>TypeScript</strong> and <strong>React</strong> combination and know best practices to build
        easy-expandable architecture based on those tools and its ecosystem. I also quickly explore new technologies.
      </p>

      <p>
        Throughout my career I have learned to find a common language with anybody and have succeeded in mentoring. I
        know how to defend my point of view, but I'm also open to someone else's.
      </p>

      <WithAside
        aside={
          <>
            <strong>Personal toolkit</strong>

            <ul>
              <li>Modern HTML, CSS and JavaScript</li>
              <li>React</li>
              <li>Webpack</li>
              <li>TypeScript</li>
              <li>Prettier</li>
              <li>Node.js</li>
              <li>Jest</li>
              <li>Next.js</li>
            </ul>
          </>
        }
      >
        <Heading>Skills</Heading>

        <ul>
          <li>
            Creating web applications with modern stack of technologies from concept through deployment, including:
            <ul>
              <li>Single Page Applications of any complexity </li>
              <li>Universal Web Applications</li>
              <li>Progressive Web Applications</li>
            </ul>
          </li>
          <li>Maintaining, troubleshooting, optimizing, and improving web applications</li>
          <li>Developing middle-tier or backend services with Node.js</li>
          <li>Maintaining open-source libraries</li>
        </ul>
      </WithAside>
      <Heading level={2}>Have good knowledge in</Heading>

      <ul>
        <li>
          Approaches
          <ul>
            <li>Declarative programming as priority paradigm</li>
            <li>Functional programming</li>
            <li>Reactive programming</li>
            <li>Object oriented programming</li>
            <li>Test driven development</li>
            <li>Mobile first approach</li>
            <li>Style-guide driven UI development</li>
          </ul>
        </li>
        <li>React at a high level</li>
        <li>Statically-typed coding with TypeScript, Flowtype</li>
        <li>
          Any of most popular CSS technologies and practices
          <ul>
            <li>PostCSS ecosystem, SCSS, Less</li>
            <li>Styled components, Emotion, Styled JSX</li>
            <li>CSS modules, BEM</li>
          </ul>
        </li>
        <li>Popular builders configuration: Webpack, Vite, Parcel, Rollup</li>
        <li>Testing with Jest, Cypress</li>
        <li>
          Security
          <ul>
            <li>SSL/HTTPS</li>
            <li>CORS</li>
            <li>Content Security Policy</li>
            <li>OWASP</li>
          </ul>
        </li>
      </ul>

      <Heading>Experience</Heading>

      <WithAside
        aside={
          <>
            <p>
              <strong>Frontend developer</strong>
              <br />
              April 2020 — present
            </p>

            <Keywords
              list={[
                'JavaScript',
                'React',
                'TypeScript',
                'Docker',
                'Gitlab CI',
                'RxJS',
                'E2E Testing',
                'UI Kit',
                'Style-guide',
                'Declarative Programming',
              ]}
            />
          </>
        }
      >
        <Heading level={2}>Tinkoff Bank</Heading>
        <em>Payment Technologies Division</em>
      </WithAside>

      <p>
        <strong>Key qualifications & responsibilities</strong>
      </p>

      <ul>
        <li>Developing ATM user interface</li>
      </ul>

      <p>
        <strong>Key achievements</strong>
      </p>

      <ul>
        <li>Closed technical debts related with legacy code base</li>
        <li>Introduced and developed new business logic architecture based on finite state machine</li>
        <li>Introduced and developed an autogenerated map of user interaction scenarios</li>
        <li>Released new design and rethought UI architecture to easy develop</li>
        <li>Introduced practice of using components style-guide via Storybook and screenshot testing</li>
        <li>Made development toolkits for team daily use</li>
        <li>Increased knowledge base</li>
        <li>Implemented various business features</li>
      </ul>

      <WithAside
        aside={
          <>
            <p>
              <strong>Frontend developer</strong>
              <br />
              June 2019 — August 2020
              <br />
              <em>1 year 2 months</em>
            </p>

            <Keywords
              list={[
                'JavaScript',
                'React',
                'TypeScript',
                'kPHP',
                'PHP',
                'Open Source',
                'UI Kit',
                'Node.js',
                'OOP',
                'Declarative Programming',
                'Super-App',
              ]}
            />
          </>
        }
      >
        <Heading level={2}>VK</Heading>
        <em>API Division/Super-app Division</em>
      </WithAside>

      <p>
        <strong>Key qualifications & responsibilities</strong>
      </p>
      <ul>
        <li>Developing new features for VK website</li>
        <li>Developing and maintaining VK’s super-app API</li>
        <li>Maintaining VK open-source libraries</li>
        <li>Developing MVP products</li>
      </ul>

      <p>
        <strong>Key achievements</strong>
      </p>
      <ul>
        <li>Developed tools for interaction between VK and third-party mini-apps</li>
        <li>Maintained open-source libraries VK Bridge, VKUI and related ones</li>
        <li>Provided support VK's shortening links service</li>
        <li>Developed the MVP of the platform for e-learning</li>
        <li>Developed the portal for developers</li>
      </ul>

      <WithAside
        aside={
          <>
            <p>
              <strong>Fullstack JavaScript developer</strong>
              <br />
              July 2018 — June 2019
              <br />
              <em>1 year</em>
            </p>

            <Keywords
              list={[
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
                'Declarative Programming',
              ]}
            />
          </>
        }
      >
        <Heading level={2}>Alfa-Bank</Heading>
        <em>Digital Division</em>
      </WithAside>
      <p>
        <strong>Key qualifications & responsibilities</strong>
      </p>
      <ul>
        <li>Maintaining design system solutions and integrating it into corporate practice</li>
      </ul>

      <p>
        <strong>Key achievements</strong>
      </p>
      <ul>
        <li>
          Developed several builders for employees to use corporate design system
          <ul>
            <li>Builder of e-mail letters</li>
            <li>Builder of landing pages</li>
            <li>Builder of advertisement banners</li>
            <li>Corporate spell checker</li>
          </ul>
        </li>
        <li>Maintained the open-source UI library ARUI Feather and related ones</li>
        <li>Rewrote frontend part of 3-D Secure bank system and integrated new design system</li>
      </ul>

      <WithAside
        aside={
          <>
            <p>
              <strong>Fullstack JavaScript developer</strong>
              <br />
              October 2017 — July 2018
              <br />
              <em>9 months</em>
            </p>

            <Keywords
              list={[
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
                'OOP',
                'Declarative Programming',
                'Adobe Photoshop',
              ]}
            />
          </>
        }
      >
        <Heading level={2}>HitBTC</Heading>
        <em>Cryptocurrency solutions</em>
      </WithAside>

      <p>
        <strong>Key qualifications & responsibilities</strong>
      </p>
      <ul>
        <li>Providing support main company products and developing frontend development of MVP's</li>
      </ul>

      <p>
        <strong>Key achievements</strong>
      </p>
      <ul>
        <li>
          Provided support one of the largest (for 2017) high-load cryptocurrency exchange HitBTC, replaced legacy code
          and introduced new features with modern technologies
        </li>
        <li>Participated in the development of MVP cryptocurrency exchange based on smart contracts</li>
        <li>
          Developed frontend and microservice backend on Node.js of the MVP version of a monitoring system for
          cryptocurrency games
        </li>
        <li>Developed an internal application for working with company financial data</li>
      </ul>

      <WithAside
        aside={
          <>
            <p>
              <strong>Frontend developer/UI designer</strong>
              <br />
              July 2016 — October 2017
              <br />
              <em>1 year 4 months</em>
            </p>

            <Keywords
              list={[
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
                'OOP',
                'Declarative Programming',
                'WebSocket',
                'Adobe Photoshop',
                'Unit Testing',
                'Chrome extentions',
                'SVG',
              ]}
            />
          </>
        }
      >
        <Heading level={2}>HyperMethod</Heading>
        <em>Development and implementation of solutions for remote education</em>
      </WithAside>

      <p>
        <strong>Key qualifications & responsibilities</strong>
      </p>

      <ul>
        <li>Developing B2B products for e-learning of companies employees</li>
        <li>Developing company product interfaces (coding and UI design)</li>
      </ul>

      <p>
        <strong>Key achievements</strong>
      </p>
      <ul>
        <li>
          Developed various courses for e-learning of client companies employees including UI design and illustrations
        </li>
        <li>Developed new builder for e-learning courses based on the SCORM specification</li>
        <li>Developed webinar platform for business based on WebRTC</li>
        <li>Developed and maintained company websites and promotional landings</li>
        <li>
          Introduced React, TypeScript and other modern technologies into company and implemented it into practice
        </li>
      </ul>

      <Heading>Hobbies and personal qualities</Heading>

      <p>
        For several years I was the organizer of the St. Petersburg community "SPB Frontend". Together with other
        organizers, we used to held meetups and informal meetings for frontend developers.
      </p>

      <p>Used to do embedded development with Arduino and Espruino in free time.</p>

      <p>
        Worked as a freelance UI designer before professional developer career and have been interested in graphic
        design ever since.
      </p>
    </>
  );
};

export default function Cv() {
  return (
    <Page title="Curriculum vitae" lang="en">
      <CvMarkup />
    </Page>
  );
}
