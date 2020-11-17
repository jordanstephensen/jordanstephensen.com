import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ children }) => (
    <div className="header">
      <siteTitle >
        <Link to="/">
          JORDAN STEPHENSEN
        </Link>
      </siteTitle>
      <navLinks>
        <Link to="/">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/">CONTACT</Link>
      </navLinks>
    </div>
)

export default Header
