import PropTypes from "prop-types"
import React from "react"

import Link from "../../components/link/link"
import Pill from "../../components/pill/pill"

import './card.scss'

const Card = ({ className, image, title, category, descriptor, year, link, target, children }) => (
  <div className={`js-card ${className}`}  >
        <div className="js-card-contents">
          <div className="js-card-contents__image-container">
              <img className="js-card-contents__image-container--img" src={image} alt={title}/>
          </div>
          <div className="js-card-contents__text-container">
            <h3>{title}</h3>
            <div className="js-card-contents__text-container__year-container">
              <h4>{year}</h4>
              <Pill className={`js-card-contents__text-container__year-container__pill js-card-contents__text-container__year-container__pill--primary js-card-contents__text-container__year-container__pill--${category}`}  label={category}/>
              <Pill className="js-card-contents__text-container__year-container__pill js-card-contents__text-container__year-container__pill--secondary" label={descriptor}/>
            </div>
            <div className="js-card-contents__children">
              {children}
            </div>
            <Link className="js-card-contents__link" href={link} target={target}>See more</Link>
          </div>
          <div className="js-card__corners">
                <svg className="js-card__corners--tl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 1H1V19" stroke="white"/>
                </svg>
                <svg className="js-card__corners--tr" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H18V19" stroke="white"/>
                </svg>
                <svg className="js-card__corners--br" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 18H18V0" stroke="white"/>
                </svg>
                <svg className="js-card__corners--bl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 18H1V0" stroke="white"/>
                </svg>
              </div>
        </div>
    </div>
)

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  descriptor: PropTypes.string,
  year: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.string,
}



export default Card
