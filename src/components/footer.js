import { Link } from "gatsby"
import React from "react"
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import arena from '../images/arena.svg'

import './footer.css'

const Footer = ({ children }) => (
  <div class="footer">
      <h4 class="copyright">
        © {new Date().getFullYear()}
      </h4>
      <div class="footerlinks"></div>
        <footerlinks>
          <a href="/">
            <img 
              class="twitter"
              src={twitter} 
              alt="twitter logo"
            />
          </a>
          <a href="/">
            <img 
              class="instagram"
              src={instagram} 
              alt="instagram logo"
            />
          </a>
          <a href="/">
            <img 
              class="github"
              src={github} 
              alt="github logo"
            />
          </a>
          <a href="/">
            <img 
              class="arena"
              src={arena} 
              alt="arena logo"
            />
          </a>
        </footerlinks>
      </div>
)

export default Footer
