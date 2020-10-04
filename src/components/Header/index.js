import React from "react"
import logo from "./logo.png"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.myFunction = this.myFunction.bind(this, this.myFunction)
  }

  myFunction() {
    let x
    if (typeof document !== "undefined") {
      x = document.getElementById("myTopnav")
      if (x.className === "topnav") {
        x.className += " responsive"
      } else {
        x.className = "topnav"
      }
    }
  }

  render() {
    const { location } = this.props

    const blogLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      boxShadow: location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }
    const workLinkStyle = {
      paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/work" ? `0px 1px 0px 0px black` : `none`,
    }
    const runLinkStyle = {
      paddingBottom: location.pathname === "/run" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/run" ? `0px 1px 0px 0px black` : `none`,
    }
    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/about" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/about" ? `0px 1px 0px 0px black` : `none`,
    }

    return (
      <div className="topnav" id="myTopnav">
        <a className="active" href="/">
          <img src={logo} alt="22 Boxes logo"></img>
        </a>
        <Link to={`/`}>Blog</Link>
        <Link to={`/work`}>Work</Link>
        <Link to={`/run`}>Run</Link>
        <Link to={`/musics`}>Music</Link>
        <Link to={`/about`}>About</Link>
        <a className="icon" onClick={this.myFunction}>
          {"MENU "}
          <i className="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default Header
