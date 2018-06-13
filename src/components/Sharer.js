import React, { PropTypes } from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  VKShareButton,
  EmailShareButton
} from 'react-share'
import { Sticky } from 'react-sticky'

import Button from './Button'

const Container = styled.ul`
  position: absolute;
  right: 0;
  padding: 20px;
  margin: 0;
  width: auto;
`
const Option = styled.li`
  margin-bottom: 10px;
  list-style: none;
`

const CustomButton = styled(Button)`
  width: 48px;
  height: 48px;
  padding: 5px 10px;
  font-size: 20px;
`

const ShareButtonContainerStyle = {
  display: 'inlineBlock'
}

const Sharer = ({
  url,
  title,
  description,
  image,
  isHorizontal = false,
  isSticked = true
}) => {
  return (
    <Sticky disableCompensation>
      {({ style }) => (
        <Container
          style={{
            position: style.position,
            top: style.top
          }}
        >
          <Option>
            <FacebookShareButton
              style={ShareButtonContainerStyle}
              url={url}
              hashtag='#playstrive'
            >
              <CustomButton>
                <i className='fab fa-facebook' />
              </CustomButton>
            </FacebookShareButton>
          </Option>
          <Option>
            <TwitterShareButton
              url={url}
              title={title}
              via='playstrive'
              hashtags={['playstrive', 'striveblog']}
            >
              <CustomButton>
                <i className='fab fa-twitter' />
              </CustomButton>
            </TwitterShareButton>
          </Option>
          <Option>
            <WhatsappShareButton url={url}>
              <CustomButton>
                <i className='fab fa-whatsapp' />
              </CustomButton>
            </WhatsappShareButton>
          </Option>
          <Option>
            <TelegramShareButton url={url}>
              <CustomButton>
                <i className='fab fa-telegram' />
              </CustomButton>
            </TelegramShareButton>
          </Option>
          <Option>
            <VKShareButton
              url={url}
              title={title}
              description={description}
              image={image}
            >
              <CustomButton>
                <i className='fab fa-vk' />
              </CustomButton>
            </VKShareButton>
          </Option>
          <Option>
            <EmailShareButton url={url}>
              <CustomButton>
                <i className='far fa-envelope' />
              </CustomButton>
            </EmailShareButton>
          </Option>
        </Container>
      )}
    </Sticky>
  )
}

Sharer.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isSticked: PropTypes.bool
}

export default Sharer
