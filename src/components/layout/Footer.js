import React from 'react'
import styled from 'styled-components'

import Container from '../layout/Container'
import Button from '../Button'

import colors from '../../aesthetics/colors'

const Background = styled.footer`
  padding: 50px 0;
  display: flex;
  background-color: ${colors.orange[5]};
  color: ${colors.orange[10]};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: inherit;
`

const Left = styled.div``
const Right = styled.div``

const Section = styled.section`
  margin-bottom: 20px;
`

const Anchor = styled.a`
  color: ${colors.orange[10]};
  font-size: 32px;

  &:hover {
    color: ${colors.orange[0]};
  }
`

const Copyright = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
`

const Footer = () => {
  return (
    <Background>
      <Container>
        <Content>
          <Left>
            <Section>
              <Button>
                Buy Strive on <i className='fab fa-steam' />
              </Button>
            </Section>

            <Copyright>
              All rights reserved &mdash; Vincae ME, {new Date().getFullYear()}.
            </Copyright>
          </Left>
          <Right>
            <Anchor
              href='https://github.com/chiefGui/strive-blog'
              target='_blank'
            >
              <i className='fab fa-github' />
            </Anchor>
          </Right>
        </Content>
      </Container>
    </Background>
  )
}

export default Footer
