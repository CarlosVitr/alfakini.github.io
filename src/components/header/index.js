import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link className="sans" style={{ fontSize: `20px`, marginRight: 20 }} to={props.to}>{props.children}</Link>
  </li>
)

const List = () => (
  <ul style={{ float: `right`, marginTop: 5 }}>
    <ListLink to="/essays">Essays</ListLink>
    <ListLink to="/library">Biblioteca</ListLink>
  </ul>
)

const Header = () => {
  return (
    <header style={{ margin: `0 auto`, maxWidth: `1200px`, padding: `52px 0` }}>
      <Logo />
      <List />
    </header>
  )
}

export default Header
