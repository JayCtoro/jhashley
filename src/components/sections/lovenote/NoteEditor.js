import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from "../../buttons/CloseButton";
import RectButton from "../../buttons/RectButton";

import { Body12 } from "../../styles/TextStyles";
import TextEditor from "../../text/TextEditor";
import ClearableInput from "../../text/TextField";
import { EditorState, Editor, RichUtils, convertToRaw } from "draft-js";
import firebase from "gatsby-plugin-firebase";
import { SelectableEmoji } from "../../lottie/SelectableEmoji";
import { format, getTime, getUnixTime } from "date-fns";

export default function NoteEditor({ show }) {
  const [selectedArray, setSelectedArray] = useState([]);
  const [textState, setTextState] = useState(EditorState.createEmpty());
  const [titleState, setTitleState] = useState("");

  function appendEmo(id) {
    selectedArray.push(id);
    setSelectedArray(selectedArray);
    console.log(`selected ${selectedArray}`);
  }

  function removeEmo(id) {
    const index = selectedArray.indexOf(id);
    const temp = selectedArray;
    temp.splice(index, 1);
    setSelectedArray(temp);
    console.log(`selected ${temp}`);
  }

  function setText(text) {
    setTextState(text);
    console.log(`textState is ${textState}`);
  }
  const content = textState.getCurrentContent();
  const rawVal = convertToRaw(content);
  const jsString = JSON.stringify(rawVal);
  const currEmail = firebase.auth().currentUser.email;
  const name = currEmail === "qin.jinghuang@dhs.sg" ? "JH" : "Ashley";

  function addNote() {
    show();
    firebase
      .firestore()
      .collection("lovenotes")
      .add({
        name: name,
        emo: selectedArray,
        text: jsString,
        time: getUnixTime(new Date()),
        ashread: false,
        jhread: false,
        title: titleState,
      })
      .then(console.log("hahahahahah"))
      .catch((error) => console.log("error", error));
  }

  return (
    <Wrapper>
      <BoxWrapper>
        <Title>{titleState ? titleState : "New Love Note"}</Title>
        <ClearableInput title="Title" handle={setTitleState} />
        <SelectableEmoji
          array={selectedArray}
          appendEmo={appendEmo}
          removeEmo={removeEmo}
        />
        <EditorWrapper>
          <TextEditor setText={setText} />
        </EditorWrapper>
        <ButtonWrapper>
          <RectButton title="Post Love Note" onClick={() => addNote()} />
          <CloseButton onClick={() => show()} />
        </ButtonWrapper>
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;

  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(177, 169, 185, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1;

  justify-content: center;
  align-items: center;
`;
const BoxWrapper = styled.div`
  @media (max-width: 450px) {
    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 90vw;
    padding: 20px;
    gap: 10px;
    grid-template-rows: 1fr 2fr 2fr 24sfr 2fr;
  }

  @media (min-width: 450px) {
    display: grid;
    align-items: center;
    width: 90vw;
    padding: 20px;
    gap: 20px;
    background: #ffffff;
    box-shadow: 2px 2px 5px rgba(177, 169, 185, 0.25),
      inset 4px 4px 4px rgba(177, 169, 185, 0.2),
      inset -4px -4px 4px rgba(177, 169, 185, 0.2);
    border-radius: 30px;
  }
`;

const Title = styled(Body12)`
  vertical-align: center;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 20px;

  @media (max-width: 450px) {
    padding-bottom: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const EditorWrapper = styled.div`
  box-sizing: border-box;
  justify-content: center;
`;
