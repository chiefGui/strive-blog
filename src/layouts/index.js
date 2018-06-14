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
  typeof window !== 'undefined' &&
  window.location.pathname + window.location.search

GoogleAnalytics.initialize('UA-119326806-2')
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
