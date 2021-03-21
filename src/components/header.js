import { Link } from "gatsby"
import React from "react"
import peace from '../images/peace.svg'

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
    {/* <div class="header"> */}
      <h3>
        <Link id="peacelink" to="/☮">
          <img 
            src={peace} 
            alt="peace"
          />
        </Link>
      </h3>
      <div className="header__contents">
        <h4 className="header__contents--site-title">
            <Link to="/">
              JORDAN STEPHENSEN
            </Link>
          </h4>
          <div className="header__contents--nav-links">
            <Link to="/about">ABOUT</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
      </div>
    </div>
    )
  };
};

  export default Header
