import React from "react";
import styled from "styled-components";
import SantokuLogo from "./SantokuLogo";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <SantokuLogo />
      </LogoWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 85px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(177, 169, 185, 0.2);
  border-radius: 10px;

  @media (max-width: 768px) {
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    height: 50px;
  }

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(177, 169, 185, 0.2);
`;

const LogoWrapper = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
