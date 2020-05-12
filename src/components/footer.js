import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../configs/typography"

const Footer = () => {
  return (
    <footer style={{textAlign: "center", marginTop: rhythm(3)}}>
      <Link to="alfakini.com">alf.</Link>
      {` · `}
      <Link to="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link>
      <br />
      <Link to="https://twitter.com/alfakini">twitter</Link>
      {` · `}
      <Link to="https://github.com/alfakini">github</Link>
      {` · `}
      <Link to="https://www.linkedin.com/in/alfachini">linkedin</Link>
      {` · `}
      <Link to="https://www.goodreads.com/user/show/10157034-alan">goodreads</Link>
      {` · `}
      <Link to="https://stackoverflow.com/users/732973/alfakini">stackoverflow</Link>
      {` · `}
      <Link to="/rss.xml">rss</Link>
    </footer>
  )
}

export default Footer
