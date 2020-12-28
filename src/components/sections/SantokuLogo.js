import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/TextStyles";
import { Link } from "gatsby";

function santokuLogo() {
  return (
    <Link to="/">
      <LogoWrapper>
        <Icon src="/images/logos/ashley.svg" alt="logo" />
        <LogoTitle>
          JH <span>&</span> ASHLEY
        </LogoTitle>
      </LogoWrapper>
    </Link>
  );
}

export default santokuLogo;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  align-items: center;
  justify-content: end;
`;

const LogoTitle = styled(H3)`
  color: #8abad3;
  padding-left: 20px;
  span {
    color: #ff7197;
    opacity: 70%;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    padding-left: 5px;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
  }
`;
