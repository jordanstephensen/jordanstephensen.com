import { Link } from "gatsby"
import React from "react"
import twitter from '../images/social/twitter.svg'
import instagram from '../images/social/instagram.svg'
import github from '../images/social/github.svg'
import arena from '../images/social/arena.svg'

import './footer.css'

const Footer = ({ children }) => (
  <div class="footer">
    <div class="footercontents">
      <h4 class="copyright">
        © {new Date().getFullYear()}
      </h4>
      <div class="footerlinks"></div>
        <footerlinks>
          <a href="https://www.twitter.com/jwstephensen" target="_blank" rel="noreferrer">
            <img 
              class="twitter"
              src={twitter} 
              alt="twitter logo"
            />
          </a>
          <a href="https://www.instagram.com/jordanstephensen" target="_blank" rel="noreferrer">
            <img 
              class="instagram"
              src={instagram} 
              alt="instagram logo"
            />
          </a>
          <a href="https://www.github.com/jordanstephensen" target="_blank" rel="noreferrer">
            <img 
              class="github"
              src={github} 
              alt="github logo"
            />
          </a>
          <a href="https://www.are.na/jordan-stephensen" target="_blank" rel="noreferrer">
            <img 
              class="arena"
              src={arena} 
              alt="arena logo"
            />
          </a>
        </footerlinks>
      </div>
    </div>
)

export default Footer
