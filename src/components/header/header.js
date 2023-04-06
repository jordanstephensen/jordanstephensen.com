import { Link } from "gatsby"
import React from "react"
import peace from '../../images/peace.svg'
import mail from '../../images/mail-icon.svg'

import './header.scss'

class Header extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        hasScrolled: false
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }
  
    handleScroll = (event) => {
      const scrollTop = window.pageYOffset
  
      if (scrollTop > 50) {
        this.setState({ hasScrolled: true })
      } else {
        this.setState({ hasScrolled: false })
      }
    }
  
  render() {
    return (
    <div className={this.state.hasScrolled ? 'header HeaderScrolled' : 'header'}>
      <h3>
        <Link id="peacelink" to="/☮">
          <img 
            src={peace} 
            alt="peace"
          />
        </Link>
      </h3>
      <div className="header-contents">
        <h4 className="header-contents__site-title">
            <Link to="/">
              JORDAN STEPHENSEN
            </Link>
          </h4>
          <div className="header-contents__nav-links">
            <Link to="/about">ABOUT</Link>
            <Link to="/projects">PROJECTS</Link>
            <a href="mailto:jordanstephensen@gmail.com" target="_blank" rel="noreferrer">CONTACT<img className="header-contents__nav-links-icon" src={mail} alt="mail icon"/></a>
          </div>
      </div>
    </div>
    )
  };
};

  export default Header
