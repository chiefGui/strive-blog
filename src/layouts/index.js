import React from 'react'
import GoogleAnalytics from 'react-ga'
import 'normalize.css'

import Header from '../components/layout/Header/index'
import Footer from '../components/layout/Footer'
import isDefined from '../utils/isDefined'

import typography from '../aesthetics/typography'
import './globals.css'

typography.injectStyles()

const GoogleAnalyticsPageviewParam =
  isDefined(window) && window.location.pathname + window.location.search

GoogleAnalytics.initialize('UA-120846585-1')
GoogleAnalytics.pageview(GoogleAnalyticsPageviewParam)

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
