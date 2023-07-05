import { Link } from "gatsby"
import React from "react"
// import peace from '../../images/peace.svg'
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
    <div className={this.state.hasScrolled ? 'header header--scrolled' : 'header'}>
      {/* <h3>
        <Link className="header__peace]" to="/☮">
          <img 
            src={peace} 
            alt="peace"
          />
        </Link>
      </h3> */}
      <div className="header__contents">
        <h4 className="header__site-title">
            <Link to="/">
              JORDAN STEPHENSEN
            </Link>
          </h4>
          <div className="header__nav-links">
            <Link activeClassName="header__nav-links--active" to="/about">ABOUT</Link>
            <Link activeClassName="header__nav-links--active" to="/work">WORK</Link>
            <a href="mailto:jordanstephensen@gmail.com" target="_blank" rel="noreferrer">CONTACT<img className="header__nav-links-icon" src={mail} alt="mail icon"/></a>
          </div>
      </div>
    </div>
    )
  };
};

  export default Header
