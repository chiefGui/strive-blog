import React from 'react'

const Template = ({ location, children }) => {
  return children()
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
