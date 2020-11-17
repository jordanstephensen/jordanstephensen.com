import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Background from "./background"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
        <body>
        <Header />
          {/* <Background /> */}
          <div>
            <main> 
              {children}
            </main>
              <Footer />
          </div>
        </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
