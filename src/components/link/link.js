import PropTypes from "prop-types"
import React from "react"
import popout from '../../images/popout-icon.svg'

import './link.scss'

const Link = ({ href, target, rel, children }) => (
    <a 
        href={href} 
        target={target} 
        rel={ target === '_blank' ? 
                'noopener noreferrer'
                :
                {rel}
            }
    >
        {children} 
        
        { target === '_blank' && (
            <img className="icon-popout link-icon" src={popout} alt="pop out icon"/>
        )}
        </a>
    )

Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    children: PropTypes.string,
}

export default Link
