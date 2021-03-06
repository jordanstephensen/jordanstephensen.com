import PropTypes from "prop-types"
import React from "react"

import './card.scss'

const Card = ({ image, title, year, button, target, children }) => (
  <div className="card">
        <div className="card__contents">
          <div className="card__contents__image-container">
              <img className="card__contents__image-container--img" src={image} alt={title}/>
          </div>
          <div className="card__contents__text-container">
            <h3>{title}</h3>
            <div className="card__contents__pill-container">{children}</div>
            <a href={button} target={target} rel="nofollow" >See more</a>
            <h3>{year}</h3>
          </div>
        </div>
        <div className="card__corners">
          <svg className="card__corners--tl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1H1V19" stroke="white"/>
          </svg>
          <svg className="card__corners--tr" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H18V19" stroke="white"/>
          </svg>
          <svg className="card__corners--br" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18H18V0" stroke="white"/>
          </svg>
          <svg className="card__corners--bl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 18H1V0" stroke="white"/>
          </svg>
        </div>
    </div>
)

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.string,
}



export default Card
