import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"
import PageTitle from "./pageTitle"
import Spacer from "./spacer"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ title, children }) => {
  return (
    <>
        <Header />
        <div className="contents">
          <PageTitle title={title}/>
            <div className="contents__main"> 
              {children}
            </div>
            <Spacer size="xlarge" />
            <Spacer size="xlarge" />
          </div>
          <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
