import PropTypes from "prop-types"
import React from "react"
import './textLink.css'

const TextLink = ({ URL, children }) => (
    <a href={URL}>
        {children}
    </a>
)

TextLink.propTypes = {
    URL: PropTypes.string,
  }
  
export default TextLink
  