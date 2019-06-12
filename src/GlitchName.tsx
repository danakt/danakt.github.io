import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import times from 'ramda/es/times'

const Name = styled.h1`
  font-size: 50px;
  color: #4affff;
  margin: 20px 0;
  text-transform: uppercase;
  position: relative;
  opacity: 1;
  filter: blur(0);

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`

const GhostName = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  color: #4affff;
  visibility: hidden;
  opacity: 0;
  filter: blur(0);

  &::before {
    content: attr(data-text);
  }
`

type Props = {
  children: string
  isGlitching: boolean
  intervalTime: number
  sidesGlitchRange: number
}

export const GlitchName = (props: Props) => {
  const NUM_OF_GHOST_NAMES = 2
  const [nameStyles, setNameStyles] = useState<React.CSSProperties>({})
  const [ghostNameStyles, setGhostNameStyles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Updating styles of name element
      setNameStyles(
        props.isGlitching
          ? {
            opacity: Math.random() * 0.6,
            filter: 'blur(' + Math.random() + 'px)'
          }
          : {}
      )

      // Updating styles of ghost name elements
      setGhostNameStyles(
        times(
          i =>
            props.isGlitching
              ? {
                visibility: 'visible',
                left: Math.random() * props.sidesGlitchRange - props.sidesGlitchRange / 2 + 'px',
                opacity: Math.random() * 0.5,
                filter: 'blur(' + Math.random() + 'px)'
              }
              : {},
          NUM_OF_GHOST_NAMES
        )
      )
    }, props.intervalTime)

    return () => clearInterval(intervalId)
  }, [props.intervalTime, props.isGlitching, props.sidesGlitchRange])

  return (
    <Name style={nameStyles}>
      {props.children}

      {ghostNameStyles.map((styles, i) => (
        <GhostName key={i} data-text={props.children} style={styles} />
      ))}
    </Name>
  )
}
