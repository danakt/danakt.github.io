import React, { ReactNode } from 'react';
import styled from 'styled-components';

const KeywordsWrapper = styled.p`
  position: relative;
  margin-left: -10px;
  margin-right: -10px;

  @media (max-width: 1150px) {
    margin-left: -3px;
    margin-right: -3px;
  }
`;

const Keyword = styled.mark`
  display: inline-block;
  background-color: #f7f6f6;
  padding: 0 7px;
  margin: 3px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.9em;

  @media (prefers-color-scheme: dark) {
    background-color: #212121;
    color: #fff;
  }
`;

type Props = {
  list: ReactNode[];
};

export const Keywords = (props: Props) => {
  return (
    <KeywordsWrapper>
      {props.list.map((item, i) => (
        <Keyword key={i}>{item}</Keyword>
      ))}
    </KeywordsWrapper>
  );
};
