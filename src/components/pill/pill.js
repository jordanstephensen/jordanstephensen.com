import PropTypes from "prop-types"
import React from "react"

import './pill.scss'

const Pill = ({ className, label }) => (
        <small className={`pill ${className}`}>{label}</small> 
)

Pill.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}

export default Pill
