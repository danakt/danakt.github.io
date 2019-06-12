import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background: rgba(26, 26, 26, 0.8);
`

const Video = styled.video`
  position: absolute;
  z-index: -1000;
  left: 50%;
  top: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);

  @media (max-width: 1024px) {
    display: none;
  }
`

type Props = {
  isGlitching: boolean
  intervalTime: number
}

export const BackgroundVideo = (props: Props) => {
  const glitchImages = ['./glitch0.png', './glitch1.png', './glitch2.png', './glitch3.png']
  const [bgStyles, setBgStyles] = useState<React.CSSProperties>({})

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * glitchImages.length)

      // Updating styles of background
      setBgStyles(props.isGlitching ? { backgroundImage: `url('./glitch${index}.png')` } : {})
    }, props.intervalTime)

    return () => clearInterval(intervalId)
  }, [glitchImages.length, props.intervalTime, props.isGlitching])

  return (
    <Wrapper style={bgStyles}>
      <Video poster="./poster.png" playsInline autoPlay muted onEnded={e => (e.target as HTMLVideoElement).play()}>
        <source src="./hsdf3kMz7.mp4" type="video/mp4" />
      </Video>
    </Wrapper>
  )
}
