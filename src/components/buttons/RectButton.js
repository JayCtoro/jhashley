import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { Body31 } from "../styles/TextStyles";

function RectButton(props) {
  const { title, color } = props;
  const [pressed, setPressed] = useState(false);

  function clickState() {
    console.log("click!");
    setPressed(!pressed);
  }

  return (
    <Wrapper>
      <ContentWrapper
        pressed={pressed}
        onMouseDown={clickState}
        onMouseUp={clickState}
        onClick={props.onClick}
      >
        <Title pressed={pressed} color={color}>
          {title}
        </Title>
      </ContentWrapper>
    </Wrapper>
  );
}

export default RectButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-content: center;
  flex: none;
  background: #ffffff;

  box-shadow: -1px -1px 1px rgba(177, 169, 185, 0.1),
    inset 2px 0px 4px rgba(177, 169, 185, 0.1),
    2px 1px ${(props) => (props.pressed ? "1px" : "3px")}
      rgba(177, 169, 185, ${(props) => (props.pressed ? "0.5" : "0.25")});

  transform: scale(${(props) => (props.pressed ? "0.90" : "1")});
  transition: 0.1s ease-in-out;
  border-radius: 20px;
  width: fit-content;
  :hover {
    background: rgba(255, 113, 151, 0.05);
  }
`;

const Title = styled(Body31)`
  cursor: pointer;
  filter: opacity(50%);
  padding: 10px 20px;
  color: ${(props) => (props.color ? props.color : "#ff7197")};
  filter: brightness(${(props) => (props.pressed ? "110%" : "100%")});
`;
