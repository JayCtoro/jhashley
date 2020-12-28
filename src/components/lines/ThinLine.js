import React from "react";
import styled from "styled-components";

export default function ThinLine() {
  return <Line />;
}

const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 0.5px solid rgba(115, 102, 125, 0.1);
`;
