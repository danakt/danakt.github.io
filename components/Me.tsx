import styled from 'styled-components';

export const Photo = styled.img`
  display: block;
  width: 130px;
  margin-bottom: 11px;

  @media (max-width: 980px) {
    width: 100px;
  }
`;

export const Me = () => (
  <>
    <Photo src="/me2016.jpg" alt="2017" />
  </>
);
