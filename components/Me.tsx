import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 1150px) {
    display: flex;
  }
`;

export const Photo = styled.img`
  display: block;
  width: 130px;
  margin-bottom: 11px;

  @media (max-width: 1150px) {
    margin-bottom: auto;
    width: 100px;
  }
`;

export const Text = styled.div`
  @media (max-width: 1150px) {
    padding: 5px 0;
    margin-left: 12px;
  }
`;

export const Me = () => (
  <Wrapper>
    <a href="/me2016.jpg">
      <Photo src="/me2016.jpg" alt="2017" />
    </a>

    <Text>
      <em>Это я в 2016</em>
    </Text>
  </Wrapper>
);
