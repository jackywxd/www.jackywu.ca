import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./Header"
import "../utils/global.css"

function Layout({ location, title, children }) {
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      id="container"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        fontFamily: `Montserrat`,
      }}
    >
      <header>
        {" "}
        <Header location={location} />{" "}
      </header>
      <main
        style={{
          minHeight: `calc(100vh - 120px)`,
          border: `0.5px solid #EEEEEE`,
          borderBottom: `0px`,
          borderRadius: `10px 10px 0px 0px`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
