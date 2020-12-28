import React from "react";
import styled from "styled-components";
import Emoji from "../../lottie/LottieObject";
import { Body22, Body43 } from "../../styles/TextStyles";

import ThinLine from "../../lines/ThinLine";
import { Editor, convertFromRaw, EditorState, ContentState } from "draft-js";
import TextReader from "../../text/TextReader";
import { format, fromUnixTime, isSameDay, isYesterday } from "date-fns";

function dateHandler(num) {
  const date = fromUnixTime(num);
  if (isSameDay(date, new Date())) {
    //show time only
    return "Today at " + format(date, "p");
  } else if (isYesterday(date)) {
    return "Yesterday, " + format(date, "p");
  } else {
    //date and time
    return format(date, "MMM-dd-yy' 'p");
  }
}

export default function LoveNoteReader({ msgItem, curr }) {
  //useStates
  const convertedState = convertFromRaw(JSON.parse(msgItem.text));
  const editorState = EditorState.createWithContent(convertedState);

  return (
    <Wrapper>
      <HeadingWrapper>
        <PicWrapper isEmpty={msgItem.name === ""}>
          <Avatar
            src={
              msgItem.name === "JH"
                ? "/images/avatars/JH.jpg"
                : "/images/avatars/Ashley.jpg"
            }
            alt="logo"
          />
        </PicWrapper>
        <ContentWrapper>
          <FirstRow>
            <EmoticonWrapper>
              {msgItem.emo.map((item, index) => (
                <Emoji num={item} key={index} />
              ))}
            </EmoticonWrapper>
            <Time>{msgItem.time ? dateHandler(msgItem.time) : ""}</Time>
          </FirstRow>
          <Name>{msgItem.name}</Name>
          <Title>
            {msgItem.title || curr === -1 ? msgItem.title : "(No Title)"}
          </Title>
        </ContentWrapper>
      </HeadingWrapper>
      <ThinLine />

      <TextReader editorState={editorState} />
    </Wrapper>
  );
}

const Wrapper = styled.menu`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    max-width: 95vw;
    height: 70vh;
  }

  @media (min-width: 500px) {
    display: grid;
    padding: 20px;
    grid-template-rows: 120fr 1fr 700fr;
    max-height: 70vh;
  }

  box-shadow: inset 4px -4px 4px rgba(177, 169, 185, 0.1);
`;

const PicWrapper = styled.div`
  display: ${(props) => (props.isEmpty ? "none" : "flex")};
  justify-self: center;
`;
const ContentWrapper = styled.div`
  /* background: #ff7197; */
  display: grid;
  padding: 10px;
`;
const Name = styled(Body22)`
  color: #8abad3;
  padding-top: 5px;
`;
const Time = styled(Body43)`
  display: flex;
  justify-content: space-between;
  color: #a298ab;
  opacity: 50%;
  line-height: 15px;
`;
const EmoticonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
`;
const Title = styled(Body22)`
  @media (max-width: 450px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 450px) {
    color: #73667d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const HeadingWrapper = styled.div`
  @media (min-width: 500px) {
    height: 150px;
    padding: 10px;
    display: grid;
    grid-template-columns: 100px auto;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 40px auto;
    width: 95vw;
    padding: 0 10px 0 10px;
  }
`;

const Avatar = styled.img`
  @media (max-width: 450px) {
    height: 40px;
    width: 40px;
  }
  height: 60px;
  width: 60px;
  border: 0.5px solid rgba(115, 102, 125, 0.1);
  border-radius: 50%;
  align-self: center;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
