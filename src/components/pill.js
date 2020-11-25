import PropTypes from "prop-types"
import React from "react"

import './pill.css'

const Pill = ({ label }) => (
        <h6 class="pill">{label}</h6> 
)

Pill.propTypes = {
  children: PropTypes.string,
}

export default Pill
