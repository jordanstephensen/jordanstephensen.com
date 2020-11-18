import { Link } from "gatsby"
import React from "react"
import './header.css'

const Header = ({ children }) => (
    <div class="header">
      <h4 class="sitetitle">
          <Link to="/">
            JORDAN STEPHENSEN
          </Link>
        </h4>
      <div className="spacer"></div>
      <div className="navLinks">
        <navlinks>
          <Link to="/about">ABOUT</Link>
          <Link to="/work">WORK</Link>
          <Link to="/contact">CONTACT</Link>
        </navlinks>
      </div>
    </div>
)

export default Header
