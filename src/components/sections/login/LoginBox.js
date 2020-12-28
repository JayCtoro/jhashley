import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Body42, Body43, Logo } from "../../styles/TextStyles";
import PasswordInput from "../../text/PasswordTextField";
import ClearableInput from "../../text/TextField";
import { Bounce } from "animate-css-styled-components";
import RectButton from "../../buttons/RectButton";
import firebase from "gatsby-plugin-firebase";
import "firebase/auth";
import { navigate } from "gatsby";

export default function LoginBox() {
  const [errormsg, setErrormsg] = useState("there");
  const [errorState, setErrorState] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInWithEmailPassword(event) {
    console.log(`email: ${email}, password: ${password}`);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(`signed in with ${user}`);
        navigate("/page-2/");
        const currEmail = firebase.auth().currentUser.email;
        console.log(`email is ${currEmail}`);
      })
      .catch((error) => {
        setErrorState(true);
        setErrormsg(error.message);
      });
    // [END auth_signin_password]
  }

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        signInWithEmailPassword(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const showError = errorState ? (
    <Bounce duration="0.5s">
      <ErrorText error={errorState}>{errormsg}</ErrorText>
    </Bounce>
  ) : (
    <React.Fragment />
  );

  return (
    <Wrapper>
      {showError}
      <ClearableInput
        hasError={errorState}
        title={"E-mail"}
        handle={setEmail}
      />
      <PasswordInput hasError={errorState} handle={setPassword} />
      <ButtonsWrapper>
        <RectButton
          onClick={(event) => signInWithEmailPassword(event)}
          title={"Sign In"}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 500px;
  /* height: 353px; */

  @media (min-width: 500px) {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(177, 169, 185, 0.2),
      5px 5px 5px rgba(177, 169, 185, 0.2);
    border-radius: 30px;
  }

  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 29px;
  animation: 1s linear;
`;

const ButtonsWrapper = styled.div``;

const ErrorText = styled(Body43)`
  color: #73667d;
`;
