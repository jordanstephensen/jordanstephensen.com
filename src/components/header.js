import { Link } from "gatsby"
import React from "react"

import './header.css'

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
      <h3><Link id="peacelink" to="/☮">☮</Link></h3>
      <div class="headercontents">
        <h4 class="sitetitle">
            <Link to="/">
              JORDAN STEPHENSEN
            </Link>
          </h4>
        <div className="navLinks">
          <navlinks>
            <Link to="/about">ABOUT</Link>
            <Link to="/work">WORK</Link>
            <Link to="/contact">CONTACT</Link>
          </navlinks>
        </div>
      </div>
    </div>
    )
  };
};

  export default Header
