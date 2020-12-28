import React from "react";
import styled from "styled-components";
import { Body11, Body12, Body42, H1, H2, H3 } from "../../styles/TextStyles";

export default function CounterCard({ num, word }) {
  return (
    <BoxWrapper>
      <Text>{num}</Text>
      <Subtitle>{word}</Subtitle>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 75px;
  padding: 10px;

  @media (max-width: 500px) {
    min-width: 50px;
  }

  :hover {
    filter: brightness(120%);
  }

  background: #ffffff;
  box-shadow: 1px 1px 3px rgba(177, 169, 185, 0.2),
    3px 3px 5px rgba(177, 169, 185, 0.15);
  border-radius: 10px;
`;

const Text = styled(Body12)`
  color: #a298ab;
  @media (max-width: 500px) {
    font-weight: 600px;
    font-size: 12px;
  }
`;

const Subtitle = styled(Body42)`
  color: #8abad3;
`;
