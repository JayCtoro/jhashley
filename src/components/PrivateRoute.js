import { navigate } from "gatsby";
import React, { Component } from "react";
import firebase from "gatsby-plugin-firebase";
import "firebase/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (typeof window !== "undefined") {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        navigate("/");
        return null;
      }
    });
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
