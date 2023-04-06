import PropTypes from "prop-types"
import React from "react"

import './filter.scss'

const Filter = ({ label, onClick, active }) => (
  <div 
    className={ active ? 
      'js-filter js-filter--active'
      :
      'js-filter'
    }
    onClick={onClick}
  >
    <p>{label}</p>
  </div>
)

Filter.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default Filter
