import React from "react";
import styled from "styled-components";

export default function ThickLine() {
  return <Line />;
}

const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid rgba(115, 102, 125, 0.1);
`;
