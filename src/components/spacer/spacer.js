import PropTypes from "prop-types"
import React from "react"

import './spacer.scss'

const Spacer = ({ size }) => (
    <div class={`spacer--${size}`}/>
)

Spacer.propTypes = {
size: PropTypes.string,
}

export default Spacer
