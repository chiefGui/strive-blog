import React from 'react'
import 'normalize.css'
import typography from './utils/typography'
import './globals.css'

typography.injectStyles()

const Template = ({ children }) => {
  return children()
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
