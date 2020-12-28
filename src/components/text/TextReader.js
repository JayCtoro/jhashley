import React from "react";
import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
import "./TextEditorReader.css";
import "../../../node_modules/draft-js/dist/Draft.css";
import styled from "styled-components";

export default function TextReader({ editorState }) {
  function getBlockStyle(block) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      case "header-one":
        return "RichEditor-H1";
      case "header-two":
        return "RichEditor-H2";
      case "header-three":
        return "RichEditor-H3";
      default:
        return null;
    }
  }
  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  return (
    <ContentWrapper>
      <Editor
        blockStyleFn={getBlockStyle}
        customStyleMap={styleMap}
        editorState={editorState}
        spellCheck={false}
        readOnly={true}
      />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  font-family: Montserrat;
  margin-top: 10px;
  padding: 10px;
  color: #73667d;
  font-size: 16px;
  line-height: 25px;
  border-radius: 10px;
  overflow-y: scroll;
  word-wrap: break-word;
  z-index: 0;
`;
