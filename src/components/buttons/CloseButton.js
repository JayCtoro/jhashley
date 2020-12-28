import { checkPropTypes } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

function CloseButton(props) {
  const { title, color } = props;
  const [pressed, setPressed] = useState(false);

  function clickState() {
    console.log("click!");
    setPressed(!pressed);
  }

  return (
    <Wrapper
      pressed={pressed}
      onMouseDown={clickState}
      onMouseUp={clickState}
      onClick={props.onClick}
    >
      <ContentWrapper
        pressed={pressed}
        onMouseDown={clickState}
        onMouseUp={clickState}
        onClick={props.onClick}
      >
        <Pic pressed={pressed} color={color}>
          <img height="30px" width="30px" src="/images/icons/close.svg" />
        </Pic>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CloseButton;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 50px;
  height: 50px;
  background: #ffffff;
  box-shadow: -1px -1px 1px rgba(177, 169, 185, 0.1),
    2px 2px ${(props) => (props.pressed ? "1px" : "3px")}
      rgba(177, 169, 185, ${(props) => (props.pressed ? "0.6" : "0.25")});

  transform: scale(${(props) => (props.pressed ? "0.90" : "1")});
  transition: 0.1s ease-in-out;
  border-radius: 50%;
  :hover {
    background: rgba(255, 113, 151, 0.1);
  }
`;

const ContentWrapper = styled.div`
  display: box;
`;

const Pic = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: opacity(50%);
  color: ${(props) => (props.color ? props.color : "#ff7197")};
  filter: brightness(${(props) => (props.pressed ? "110%" : "100%")});
`;
