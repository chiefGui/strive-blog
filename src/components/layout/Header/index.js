import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import LogoUrl from './logo.png'
import Container from '../Container'
import Button from '../../Button'

import colors from '../../../aesthetics/colors'

const Background = styled.header`
  height: 200px;
  background-color: ${colors.gray[0]};
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`

const Left = styled.section``
const Right = styled.section``

const Logo = styled.figure`
  width: 200px;
  height: 50px;
  margin: 0;
`

const Nav = styled.nav``
const NavItems = styled.ul`
  padding: 0;
  margin: 0;
`
const NavItem = styled.li`
  display: inline-block;
  margin-left: 20px;
  list-style: none;
`
const NavAnchor = styled(Link)`
  text-decoration: none;
  color: ${colors.gray[3]};
  border-bottom: 1px dotted ${colors.gray[3]};
`

const Header = () => {
  return (
    <Background role='banner'>
      <Content>
        <Left>
          <Link to='/'>
            <Logo>
              <img
                src={LogoUrl}
                alt='The Strive official logo'
                role='presentation'
              />
            </Logo>
          </Link>
        </Left>
        <Right>
          <Nav>
            <NavItems>
              <NavItem>
                <NavAnchor to='/'>Home</NavAnchor>
              </NavItem>
              <NavItem>
                <Button
                  href='https://store.steampowered.com/app/827930/Strive/'
                  target='_blank'
                >
                  Buy on <i className='fab fa-steam' />
                </Button>
              </NavItem>
            </NavItems>
          </Nav>
        </Right>
      </Content>
    </Background>
  )
}

export default Header
