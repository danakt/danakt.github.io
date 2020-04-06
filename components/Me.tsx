import styled from 'styled-components';

export const Photo = styled.img`
  display: block;
  width: 130px;
  margin-bottom: 11px;
`;

export const Me = () => (
  <>
    <Photo src="/me2016.jpg" alt="2017" />
    {/* <em>Так я выглядел в 2017</em> */}
  </>
);
