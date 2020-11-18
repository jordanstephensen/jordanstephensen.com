import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
        <Header />
          <div id="background">
            <svg class="animation" width="983" height="835" viewBox="0 0 983 835" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke-width="10">
              <animate className="animation" repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M810 117.5C762 77.9998 477.5 12.4998 384.5 36.9998C209.5 83.4997 10.9999 174.5 37.9999 316.5C64.9999 458.5 63.9999 712 244 776C424 840 931.5 736.5 946.5 560.5C961.5 384.5 858 157 810 117.5Z;

              M910 92.4994C827 7.99937 671 18.4998 427 77.4996C183 136.499 105 172.5 74 281.5C43.0002 390.5 -27 670 166.5 778.5C360 887 785 809 890 605C995 401 993 176.999 910 92.4994Z;

              M976.5 113.5C906.5 -32.0008 724 40.5001 511 136C298 231.5 177 161 100 297.501C23.0003 434.002 -5.00031 663.5 129.5 767C264 870.5 757.5 758.5 900.5 579C1043.5 399.5 1046.5 259.001 976.5 113.5Z;

              M810 117.5C762 77.9998 477.5 12.4998 384.5 36.9998C209.5 83.4997 10.9999 174.5 37.9999 316.5C64.9999 458.5 63.9999 712 244 776C424 840 931.5 736.5 946.5 560.5C961.5 384.5 858 157 810 117.5Z;
              "
              /> </path>
            </svg>
          </div>
          <div>
            <main> 
              {children}
            </main>
              <Footer />
          </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
