import { Link } from "gatsby"
import React from "react"
import twitter from '../images/social/twitter.svg'
import instagram from '../images/social/instagram.svg'
import github from '../images/social/github.svg'
import arena from '../images/social/arena.svg'

import './footer.scss'

const Footer = ({ children }) => (
  <div className="footer">
    <div className="footer__contents">
      <h4 className="footer__copyright">
        © {new Date().getFullYear()}
      </h4>
      <div className="footer__links">
        <a href="https://www.twitter.com/jwstephensen" target="_blank" rel="noreferrer">
          <img 
            src={twitter} 
            alt="twitter logo"
          />
        </a>
        <a href="https://www.instagram.com/jordanstephensen" target="_blank" rel="noreferrer">
          <img 
            src={instagram} 
            alt="instagram logo"
          />
        </a>
        <a href="https://www.github.com/jordanstephensen" target="_blank" rel="noreferrer">
          <img 
            src={github} 
            alt="github logo"
          />
        </a>
        <a href="https://www.are.na/jordan-stephensen" target="_blank" rel="noreferrer">
          <img 
            src={arena} 
            alt="are.na logo"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
