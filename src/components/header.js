import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../configs/typography"

import Logo from "./logo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Logo style={{ marginRight: rhythm(1 / 2), verticalAlign: `middle` }}/>
      <h3 style={{ display: `inline-block`, margin: `0` }}>alf.</h3>

      <ul style={{ listStyle: `none`, float: `right`, marginTop: `8px` }}>
        <ListLink to="/">Blog</ListLink>
      </ul>
    </header>
  )
}

export default Header
