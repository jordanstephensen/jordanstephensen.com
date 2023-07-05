import PropTypes from "prop-types"
import React from "react"

import './filter.scss'

const Filter = ({ label, onClick, active }) => (
  <div 
    className={ active ? 
      `filter filter--${label} filter--active`
      :
      `filter filter--${label}`
    }
    onClick={onClick}
  >
    <div className="filter__color"/>
    <p>{label}</p>
  </div>
)

Filter.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default Filter
