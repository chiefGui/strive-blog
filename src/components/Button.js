import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from '../aesthetics/colors'

const shadowColor = colors.gray[3]

const ButtonContainer = styled.button`
  position: relative;
  padding: 10px;
  color: #fff;
  margin: auto;
  display: inline-block;
  background-color: ${colors.gray[5]};
  border: 3px solid ${colors.gray[3]};
  box-shadow: 1px 1px 0 ${shadowColor}, 2px 2px 0 ${shadowColor},
    3px 3px 0 ${shadowColor};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
  }

  &:hover {
    background-color: ${colors.gray[2]};
  }

  &:active {
    top: 3px;
    left: 3px;
    box-shadow: 0 0 0 0;
  }
`
const AnchorContainer = ButtonContainer.withComponent('a').extend`
  text-decoration: none;
`

const Button = ({ ...props }) => {
  const isAnchor = !!props.href

  if (isAnchor) {
    return <AnchorContainer {...props}>{props.children}</AnchorContainer>
  }

  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
}

export default Button
