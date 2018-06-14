import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'
import Rehype from 'rehype-react'
import Disqus from 'disqus-react'
import { StickyContainer } from 'react-sticky'

import colors from '../aesthetics/colors'
import Title from '../components/Title'
import Sharer from '../components/Sharer'
import Container from '../components/layout/Container'

import getCanonicalURL from '../utils/getCanonicalURL'

const Article = styled.article``
const Content = styled.div`
  padding: 100px 0;
`
const Header = styled.header``
const Main = styled.main``
const Body = styled.div`
  color: ${colors.gray[1]};
`
const Footer = styled.footer`
  padding: 100px 0;
  background-color: ${colors.gray[4]};
`

const Anchor = styled.a`
  color: ${colors.cyan[5]};
  text-decoration: none;
  border-bottom: 1px dotted ${colors.cyan[5]};

  &:hover {
    color: ${colors.cyan[2]};
    border-bottom-color: ${colors.cyan[2]};
  }
`

const PostDate = styled.time`
  color: ${colors.gray[2]};
`

const ContainerText = styled(Container)``
const Heading = ContainerText.extend`
  color: ${colors.gray[0]};
  margin: 20px auto;
  font-weight: 600;
`
const H1 = Heading.withComponent('h1').extend``
const H2 = Heading.withComponent('h2').extend``
const H3 = Heading.withComponent('h3').extend``
const H4 = Heading.withComponent('h4').extend``
const H5 = Heading.withComponent('h5').extend``
const H6 = Heading.withComponent('h6').extend``

const Ol = ContainerText.withComponent('ol').extend``
const Ul = ContainerText.withComponent('ul').extend``

const Paragraph = ContainerText.withComponent('p').extend`
  font-size: 22px;
  letter-spacing: 1px;
  margin-bottom: 40px;
`

const renderAst = new Rehype({
  createElement: React.createElement,
  components: {
    a: Anchor,
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    ol: Ol,
    ul: Ul
  }
}).Compiler

const PostTemplate = ({ data, pathContext }) => {
  const post = data.markdownRemark
  const siteTitle = get(data, 'site.siteMetadata.title')
  const postTitle = `${post.frontmatter.title} | ${siteTitle}`
  const metaTitle = `"${post.frontmatter.title}" at ${siteTitle}`
  const disqusConfig = {
    url: getCanonicalURL(),
    identifier: pathContext.slug,
    title: postTitle
  }

  return (
    <Article>
      <Helmet title={postTitle}>
        <meta name='description' content={metaTitle} />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={getCanonicalURL()} />
        <meta property='og:image' content={post.frontmatter.coverUrl} />
      </Helmet>

      <Content>
        <StickyContainer>
          <Sharer
            url={getCanonicalURL()}
            title={metaTitle}
            description={post.frontmatter.description}
            image={post.frontmatter.coverUrl}
          />

          <Header>
            <Container>
              <PostDate>{post.frontmatter.date}</PostDate>
              <Title>{post.frontmatter.title}</Title>
            </Container>
          </Header>

          <Main>
            <Body>{renderAst(post.htmlAst)}</Body>
          </Main>
        </StickyContainer>
      </Content>

      <Footer>
        <Container>
          <Disqus.DiscussionEmbed
            shortname='playstrive'
            config={disqusConfig}
          />
        </Container>
      </Footer>
    </Article>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        coverUrl
      }
    }
  }
`
