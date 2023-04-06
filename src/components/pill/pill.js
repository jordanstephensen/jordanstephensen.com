import PropTypes from "prop-types"
import React from "react"

import './pill.scss'

const Pill = ({ className, label }) => (
        <h6 className={`pill ${className}`}>{label}</h6> 
)

Pill.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}

export default Pill
