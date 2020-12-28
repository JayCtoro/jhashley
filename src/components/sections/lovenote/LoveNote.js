import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lovenoteData } from "../../../data/lovenoteData";
import { Body33, Caption } from "../../styles/TextStyles";
import LoveNoteCard from "./LoveNoteCard";
import LoveNoteReader from "./LoveNoteReader";
import CreateButton from "../../buttons/CreateButton";
import NoteEditor from "./NoteEditor";
import firebase from "gatsby-plugin-firebase";
import { convertToRaw, EditorState } from "draft-js";
import "firebase/firestore";
export default function LoveNote() {
  //Database
  const [noteData, setData] = useState([]);
  const doc = firebase
    .firestore()
    .collection("lovenotes")
    .orderBy("time", "desc");
  useEffect(() => {
    doc.onSnapshot(
      (snapshot) => {
        let notes = [];
        console.log(`Received doc snapshot: ${snapshot}`);
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          notes.push(doc.data());
        });
        setData(notes);
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }, []);

  //Show Note Editor
  const [showEditor, setShowEditor] = useState(false);

  function toggleEditor() {
    console.log();
    setShowEditor(!showEditor);
  }

  const modal = showEditor ? (
    <NoteEditor show={toggleEditor} />
  ) : (
    React.Fragment
  );

  const emptyState = EditorState.createEmpty();
  const emptyContent = emptyState.getCurrentContent();
  const emptyJS = convertToRaw(emptyContent);

  const empty = {
    name: "",
    title: "",
    text: JSON.stringify(emptyJS),
    time: "",
    emo: [],
    ashread: false,
    jhread: false,
  };

  //Passing selected items into reader
  const [msgItem, setMsgItem] = useState(empty);
  const [currSelection, setCurrentSelection] = useState(-1);

  function selectCurrent(key) {
    console.log(key + " is selected");
    setCurrentSelection(key);
  }

  function handleSelect(note) {
    console.log(note);

    setMsgItem(note);
  }

  return (
    <Wrapper>
      {modal}
      <CaptionText>Love Notes</CaptionText>
      <Description>
        It is hard to package all our feelings into the daily humdrums of life.
        Hope we write our deepest thoughts here for each other, be it when we're
        happy, or when we fight.
      </Description>
      <LoveNoteWrapper>
        <LoveNoteBox>
          <ToolSection>
            <CreateButton onClick={() => toggleEditor()} />
          </ToolSection>
          <MsgSection>
            {noteData.map((item, index) => (
              <LoveNoteCard
                msgItem={item}
                dataid={item.id}
                key={index}
                id={index}
                select={handleSelect}
                selectCurr={selectCurrent}
                selected={index === currSelection}
              />
            ))}
          </MsgSection>
        </LoveNoteBox>
        <LoveNoteReader msgItem={msgItem} curr={currSelection} />
      </LoveNoteWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 500px) {
    display: grid;
    padding: 10px;
    height: 90vh;
  }

  @media (max-width: 800px) {
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 2fr 17fr;
    padding: 10px;
  }

  @media (min-width: 500px) {
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 2fr 17fr;
    padding: 40px;
  }
`;

const CaptionText = styled(Caption)`
  color: #73667d;
  padding-left: 20px;
  align-self: flex-end;
  @media (max-width: 500px) {
    display: none;
  }
`;

const LoveNoteBox = styled.menu`
  @media (max-width: 500px) {
    display: flex;
    height: 20vh;
    width: 95vw;
    grid-template-columns: 1fr 8fr;
    align-items: center;
  }
  @media (min-width: 500px) {
    max-height: 70vh;
    display: grid;
    grid-template-rows: 1fr 8fr;
    padding: 5px;
  }

  box-shadow: inset 4px -4px 4px rgba(177, 169, 185, 0.1);
`;

const Description = styled(Body33)`
  color: #a298ab;
  padding: 20px;
  line-height: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const LoveNoteWrapper = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 30vw 60vw;
    max-width: 99vw;
    max-height: 50vh;
    justify-content: center;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 30vw 50vw;
    max-width: 95vw;
    max-height: 50vh;
    justify-content: center;
  }
`;

const ToolSection = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const MsgSection = styled.div`
  @media (max-width: 500px) {
    display: flex;
    height: inherit;
    width: 100%;
    flex-direction: column;
    overflow-y: scroll;
  }
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-y: scroll;
    height: 100%;
  }
`;
