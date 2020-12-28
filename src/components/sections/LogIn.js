import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import DaysFrom from "./login/Counter";
import LoginBox from "./login/LoginBox";

function LogIn() {
  return (
    <Wrapper>
      <ContentWrapper>
        <DaysFrom />
        <LoginBox />
      </ContentWrapper>
    </Wrapper>
  );
}

export default LogIn;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #fafafa;
`;

const ContentWrapper = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 500px) {
    gap: 50px;
  }
  padding: 20px;
`;
