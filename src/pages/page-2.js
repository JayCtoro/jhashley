import React from "react";
import Layout from "../components/layout/layout";
import LoveNote from "../components/sections/lovenote/LoveNote";
import PrivateRoute from "../components/PrivateRoute";
import "firebase/auth";

function SecondPage() {
  return (
    <Layout>
      <PrivateRoute path="/lovenotes" component={LoveNote} />
    </Layout>
  );
}

export default SecondPage;
