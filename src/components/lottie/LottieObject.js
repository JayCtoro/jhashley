import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import happy from "./Happy.json";
import tearjoy from "./Laughing Tears.json";
import crying from "./Crying.json";
import sad from "./Sad Tear.json";
import kiss from "./Kiss.json";
import shocked from "./Flushed.json";
import silly from "./Silly.json";
import mad from "./Cussing.json";
import { checkPropTypes } from "prop-types";

export default function Emoji(props) {
  const { num, selected, handle } = props;
  const emojiArray = [happy, tearjoy, crying, sad, kiss, shocked, silly, mad];

  function defaultOptions(n) {
    return {
      animationData: emojiArray[n],
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }

  if (num === 0) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(0)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 1) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(1)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 2) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(2)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 3) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(3)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 4) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(4)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 5) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(5)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 6) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(6)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  } else if (num === 7) {
    return (
      <EmojiWrapper selected={selected}>
        <Lottie options={defaultOptions(7)} isClickToPauseDisabled={true} />
      </EmojiWrapper>
    );
  }
}

const EmojiWrapper = styled.div`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;
