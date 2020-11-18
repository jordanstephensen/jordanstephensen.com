import { Link } from "gatsby"
import React from "react"
import './card.css'

const Card = ({ children }) => (
    <div class="card">
      <div class="sitetitle">
        <div class="imagecontainer">
            <img classname="cardimage" src={props.image} />
        </div>
        <h3>{props.title}</h3>
        <h3>{props.year}</h3>

        {children}
      </div>
    </div>
)

export default Card
