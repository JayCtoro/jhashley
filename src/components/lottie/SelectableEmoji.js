import React from "react";
import styled from "styled-components";
import SEmoji from "./LottieSelectable";

export function SelectableEmoji({ array, appendEmo, removeEmo }) {
  const EmoArray = [0, 1, 2, 3, 4, 5, 6, 7];

  function handleClick(index) {
    console.log(`handled`);
    if (array.includes(index)) {
      removeEmo(index);
    } else {
      appendEmo(index);
    }
  }

  return (
    <EmoticonWrapper>
      {EmoArray.map((item, index) => (
        <SEmoji num={item} key={index} handle={handleClick} />
      ))}
    </EmoticonWrapper>
  );
}

const EmoticonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
