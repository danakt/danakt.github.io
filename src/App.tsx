import React, { Fragment, useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import intersperse from 'ramda/es/intersperse'
import pipe from 'ramda/es/pipe'
import { GlitchName } from './GlitchName'
import { BackgroundVideo } from './BackgroundVideo'
import { GlobalStyles } from './GlobalStyles'
import { AboutWrapper } from './AboutWrapper'
import { Footer } from './Footer'
import { Logo } from './Logo'

const SOCIALS = [
  ['VK', '//vk.com/danakt'],
  ['Telegram', '//telegram.me/danakt'],
  ['Instagram', '//instagram.com/danakt_frost'],
  ['Twitter', '//twitter.com/danakt_frost'],
  ['GitHub', '//github.com/danakt']
]

const DANAKT_BIRTH_DAY = new Date('6 may 1996')

const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export const App = hot(module)(() => {
  const myAge = calculateAge(DANAKT_BIRTH_DAY)
  const currentYear = new Date().getFullYear()

  const [isGlitching, setGlitching] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setGlitching(!isGlitching),
      Math.floor(isGlitching ? Math.random() * 800 + 100 : Math.random() * 1e4)
    )

    return () => clearTimeout(timeoutId)
  })

  return (
    <Fragment>
      <GlobalStyles />

      <BackgroundVideo isGlitching={isGlitching} intervalTime={33} />

      <Logo />

      <AboutWrapper>
        <GlitchName isGlitching={isGlitching} intervalTime={33} sidesGlitchRange={50}>
          Danakt Frost
        </GlitchName>
        <div>
          Hello, my name is Danakt. I'm a {myAge} y/o JavaScript developer based in St Petersburg, Russia. Currently I
          work at{' '}
          <a href="//vk.com" target="_blank" rel="noreferrer noopener nofollow">
            VK
          </a>
          , but I'm ready to take a part in developing interesting projects.
          <br />
          <br />
        </div>
        Get in touch with me on{' '}
        {pipe<string[][], React.ReactNode[], React.ReactNode[]>(
          socials =>
            socials.map((item, i) => (
              <a href={item[1]} target="_blank" key={i}>
                {item[0]}
              </a>
            )),
          intersperse<React.ReactNode>(', ')
        )(SOCIALS)}
        .
      </AboutWrapper>

      <Footer>2016–{currentYear}</Footer>
    </Fragment>
  )
})
