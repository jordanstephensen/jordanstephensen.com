import PropTypes from "prop-types"
import React from "react"

import './card.css'

const Card = ({ image, title, year, button, target, children }) => (
      <card>
        <div class="imagecontainer">
            <img id="cardimage" src={image} alt={title}/>
        </div>
        <div class="textcontainer">
          <h3>{title}</h3>
          <div class="pillcontainer">{children}</div>
          <a href={button} target={target} rel="nofollow" >See more</a>
          <h3>{year}</h3>
        </div>
        <svg id="cardcorners" width="444" height="196" viewBox="0 0 444 196" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 1H1V19" stroke="#F3FAF9"/>
          <path d="M425 1H443V19" stroke="#F3FAF9"/>
          <path d="M19 195H1V177" stroke="#F3FAF9"/>
          <path d="M425 195H443V177" stroke="#F3FAF9"/>
        </svg>
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
