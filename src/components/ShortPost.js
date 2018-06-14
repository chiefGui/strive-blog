import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import colors from '../aesthetics/colors'

const Article = styled.article`
  position: relative;
  display: flex;

  &:not(:first-child) {
    padding: 100px;
  }
`

const Href = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Left = styled.div`
  margin-right: 20px;
`
const Right = styled.div``

const Title = styled.h3`
  color: ${colors.orange[5]};
  margin-bottom: 0;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const PostDate = styled.time`
  color: ${colors.gray[2]};
  vertical-align: top;
`

const Description = styled.section`
  margin-top: 10px;
  color: ${colors.gray[1]};
  font-size: 16px;
  letter-spacing: 1px;
`

const ShortPost = ({ url, title, description, createdAt }) => {
  return (
    <Article>
      <Href to={url} />

      <Left>
        <PostDate>{createdAt}</PostDate>
      </Left>
      <Right>
        <Title>{title}</Title>

        <Description>
          <span>{description}</span>
        </Description>
      </Right>
    </Article>
  )
}

ShortPost.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  createdAt: PropTypes.string.isRequired
}

export default ShortPost
