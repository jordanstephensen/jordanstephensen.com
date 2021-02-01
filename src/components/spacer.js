import PropTypes from "prop-types"
import React from "react"

import './spacer.css'

const Spacer = ({ size }) => (
    <div class="spacer"></div> 
)

Spacer.propTypes = {
size: PropTypes.string,
}

export default Spacer
