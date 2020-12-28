import React, { useState } from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import LogIn from "../components/sections/LogIn";

function IndexPage() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <LogIn />
          <SEO title="JH & Ashley" />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;

const Wrapper = styled.div`
  overflow: hidden;
  background: #fafafa;
`;

const ContentWrapper = styled.div`
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 120px 30px;
  @media (max-width: 500px) {
    padding: 100px 30px;
  }
`;
