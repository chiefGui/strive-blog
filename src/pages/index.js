import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Container from '../components/layout/Container'
import ShortPost from '../components/ShortPost'

const Content = styled.div`
  padding: 100px 0;
`

const Posts = styled.div``

const Post = styled(Container)`
  &:not(:first-child) {
    padding-top: 40px;
  }
`

class BlogIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Content>
        <Helmet title={siteTitle} />

        <Posts>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug

            return (
              <Post key={node.fields.slug}>
                <ShortPost
                  key={node.fields.slug}
                  url={node.fields.slug}
                  title={title}
                  description={node.frontmatter.description}
                  createdAt={node.frontmatter.date}
                />
              </Post>
            )
          })}
        </Posts>
      </Content>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
