import React from "react";
import styled from "styled-components";
import {
  Body22,
  Body23,
  Body32,
  Body33,
  Body43,
} from "../../styles/TextStyles";
import Emoji from "../../lottie/LottieObject";
import firebase from "gatsby-plugin-firebase";
import { format, fromUnixTime, isSameDay, isYesterday } from "date-fns";

function dateHandler(num) {
  const date = fromUnixTime(num);
  if (isSameDay(date, new Date())) {
    //show time only
    return format(date, "p");
  } else if (isYesterday(date)) {
    return format(date, "p");
  } else {
    //date and time
    return format(date, "MMM-dd");
  }
}

export default function LoveNoteCard({
  msgItem,
  select,
  id,
  dataid,
  selectCurr,
  selected,
}) {
  const db = firebase.firestore().collection("lovenotes");

  function setRead() {
    db.doc(dataid).update({ jhread: true });
  }
  console.log(`${dataid} is read`);

  function handleSelect() {
    select(msgItem);
    selectCurr(id);
  }

  const jsFormat = JSON.parse(msgItem.text);
  const msgPreview = jsFormat.blocks[0].text;

  return (
    <Wrapper onClick={handleSelect} selected={selected}>
      <PicWrapper>
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
          <Time>{dateHandler(msgItem.time)}</Time>
        </FirstRow>
        <Name>{msgItem.name}</Name>
        <Title>{msgItem.title ? msgItem.title : "(No Title)"}</Title>
        <Text>{msgPreview ? msgPreview : "(No Content)"}</Text>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 15vw;
  max-height: 120px;
  @media (max-width: 450px) {
    padding: 5px;
    display: grid;
    grid-template-columns: 12vw auto;
    align-items: center;
    height: 20vw;
    width: inherit;
    border: 1px solid rgba(115, 102, 125, 0.1);
  }
  @media (min-width: 450px) {
    cursor: pointer;

    display: grid;
    grid-template-columns: 6vw auto;
    border: 1px solid rgba(115, 102, 125, 0.1);
    :hover {
      box-shadow: 0px 4px 4px rgba(177, 169, 185, 0.1),
        2px 2px 5px rgba(177, 169, 185, 0.2);
      border-radius: 15px;
      transition: 0.3s ease-in;
    }
  }

  background: ${(props) =>
    props.selected ? "rgba(255, 113, 151, 0.1)" : "#ffffff"};
  border-radius: ${(props) => (props.selected ? "15px" : "0")};
`;
const PicWrapper = styled.div`
  @media (min-width: 450px) {
    justify-content: center;
    align-self: center;
    justify-self: center;
  }
  padding-left: 0.5vw;
  @media (max-width: 450px) {
    padding-right: 5px;
  }
`;
const ContentWrapper = styled.div`
  @media (min-width: 450px) {
    display: grid;
    padding: 10px;
    grid-gap: 5px;
  }

  @media (max-width: 450px) {
    display: grid;
    gap: 2px;
    padding: 5px;
  }
`;
const Name = styled(Body22)`
  width: 100%;
  color: #8abad3;
  @media (max-width: 450px) {
    overflow-x: hidden;
    font-size: 12px;
  }
`;
const Time = styled(Body43)`
  color: #a298ab;
`;
const EmoticonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled(Body32)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #73667d;
  @media (max-width: 450px) {
    overflow-x: hidden;
    font-size: 12px;
  }
`;
const Text = styled(Body33)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #a298ab;
  @media (max-width: 450px) {
    overflow-x: hidden;
    font-size: 12px;
  }
`;

const Circle = styled.div`
  position: relative;
  flex-shrink: 0;
  bottom: 40%;
  left: 1%;
  border-radius: 50%;
  background-color: ${(props) => (props.read ? "#ffffff" : "#ff7197")};
  height: 10px;
  width: 10px;
`;

const Avatar = styled.img`
  height: 5vw;
  width: 5vw;
  max-height: 50px;
  max-width: 50px;
  border: 0.5px solid rgba(115, 102, 125, 0.1);
  border-radius: 50%;
  @media (max-width: 450px) {
    height: 10vw;
    width: 10vw;
  }
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
