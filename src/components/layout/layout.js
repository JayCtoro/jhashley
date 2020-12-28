import React from "react"
import Header from "../sections/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
