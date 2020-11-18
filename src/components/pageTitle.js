import PropTypes from "prop-types"
import React from "react"
import logo from '../images/js-logo.svg'
import './pageTitle.css'


const PageTitle = ({ title }) => (
<div className="TitleGroup">
    <img 
        class="logo"
        src={logo} 
        alt="logo"
    />
    <h2>{title}</h2>
</div>
)

PageTitle.propTypes = {
    title: PropTypes.string,
  }
  
export default PageTitle
