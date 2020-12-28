import React, { useState } from "react";
import styled from "styled-components";

export default function ClearableInput({ title, hasError, handle }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container hasError={hasError}>
      <TextInput
        type="text"
        value={inputValue}
        placeholder={title}
        spellCheck={false}
        onChange={(event) => {
          setInputValue(event.target.value);
          handle(event.target.value);
        }}
      />
      <Icon>
        <img
          src="/images/icons/cross.svg"
          width="15px"
          height="15px"
          alt="clear"
          onClick={() => {
            setInputValue("");
            handle("");
          }}
        />
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  display: grid;
  min-width: 350px;
  grid-template-columns: 10fr 1fr;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: stretch;
  background: ${(props) =>
    props.hasError ? "rgba(255, 113, 151, 0.1)" : "#ffffff"};
  border: 1px solid rgba(177, 169, 185, 0.3);
  box-sizing: border-box;
  border-radius: 35px;

  &:hover {
    box-shadow: 2px 2px 3px rgba(177, 169, 185, 0.2);
  }
`;

const TextInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #73667d;

  font-size: inherit;
  height: 50%;
  border-radius: 20px;
  padding-left: 10px;
  border: 0;
  /* Change the white to any color ;) */

  &:focus {
    outline: none;
    background-color: transparent;
  }

  ::-webkit-input-placeholder {
    color: #a298ab;
  }
  :-ms-input-placeholder {
    color: #a298ab;
  }
`;

const Icon = styled.div`
  justify-self: center;
  cursor: pointer;
  :hover {
    filter: brightness(110%) saturate(120%);
  }
`;
