import React from 'react'
import 'normalize.css'

import Header from '../components/layout/Header/index'
import Footer from '../components/layout/Footer'

import typography from '../aesthetics/typography'
import './globals.css'

typography.injectStyles()

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children()}
      <Footer />
    </div>
  )
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
