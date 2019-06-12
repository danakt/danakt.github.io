import styled from 'styled-components'

export const Logo = styled.a.attrs({
  href: '/',
  title: 'Homepage'
})`
  background: url('./logo.png') no-repeat;
  background-size: 100%;
  height: 50px;
  width: 50px;
  position: absolute;
  z-index: 99;
  left: 30px;
  top: 30px;

  &:hover {
    background-image: url('./logo-h.png');
  }
`
