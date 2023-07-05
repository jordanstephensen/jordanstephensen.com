import PropTypes from "prop-types"
import React from "react"

import Link from "../../components/link/link"
import Pill from "../../components/pill/pill"

import './card.scss'

const Card = ({ className, image, title, category, descriptor, year, link, target, children }) => (
  <div className={`card ${className}`}  >
        <div className="card__contents">
          <div className="card__image-container">
              <img className="card__image-container-img" src={image} alt={title}/>
          </div>
          <div className="card__text-container">
            <h3>{title}</h3>
            <div className="card__year-container">
              <h4>{year}</h4>
              <Pill className={`card__pill card__pill--primary card__pill--${category}`}  label={category}/>
              <Pill className="card__pill card__pill--secondary" label={descriptor}/>
            </div>
            <div className="card__children">
              {children}
            </div>
            <Link className="card__link" href={link} target={target}>See more</Link>
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
