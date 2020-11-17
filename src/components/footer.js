import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './footer.css'

const Footer = ({ children }) => (
  <div className="footer">
      <siteTitle >
      © {new Date().getFullYear()}
      </siteTitle>
      <navLinks>
        <Link to="/">SOCIAL</Link>
      </navLinks>
    </div>
)

export default Footer
