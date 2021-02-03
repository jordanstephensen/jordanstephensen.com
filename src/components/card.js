import PropTypes from "prop-types"
import React from "react"

import './card.css'

const Card = ({ image, title, year, button, target, children }) => (
      <card>
        <div class="cardcontents">
          <div class="imagecontainer">
              <img id="cardimage" src={image} alt={title}/>
          </div>
          <div class="textcontainer">
            <h3>{title}</h3>
            <div class="pillcontainer">{children}</div>
            <a href={button} target={target} rel="nofollow" >See more</a>
            <h3>{year}</h3>
          </div>
        </div>
        <div class="cardcorners">
          <svg id="cardcorners-tl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1H1V19" stroke="white"/>
          </svg>
          <svg id="cardcorners-tr" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H18V19" stroke="white"/>
          </svg>
          <svg id="cardcorners-br" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18H18V0" stroke="white"/>
          </svg>
          <svg id="cardcorners-bl" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 18H1V0" stroke="white"/>
          </svg>
        </div>
    </card>
)

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.string,
}



export default Card
