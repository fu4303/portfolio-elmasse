
import React from 'react'
import styled from 'react-emotion'
import { Twitter, Facebook, Linkedin } from 'react-social-sharing'

import Back from './icons/back'


export default ({ title, description = '' }) => {
  const message = `${title} ${description} via @elmasse`
  return (
    <Header>
      <div>
        <a href="/"><Back fill="#212121" width="25" style={{padding: '10px 0', marginTop: '10px'}}/></a>
        <Social>
        {
          typeof window !== 'undefined' &&
          <React.Fragment>
            <Twitter solid small message={message} link={window.location} />
            <Facebook solid small message={message} link={window.location} />
            <Linkedin solid small message={message} link={window.location} />
          </React.Fragment>
        }
        </Social>
        <TitleGroup>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TitleGroup>
      </div>
    </Header>
  )
}

const Header = styled('div') `
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70vh;
  background: #f3f3f3;
  background-image: linear-gradient(135deg,#f3f3f3 0%,#f3f3f3 50.99%,#f0f0f0 51%,#f0f0f0 100%);
  padding: 10px 20px;

  @media (max-width:600px){
    width: auto;
    height: 95vh;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 25vh 0 0 100vw;
    border-color: transparent #fff transparent;
    border-style: solid;
  }
  > div {
    width:1000px;
    margin: 0px auto;

    @media (max-width:600px){
      width: auto;
    }
  
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  > time {
    padding-right: 5px;
  }
`

const Social = styled('div')`
  min-height: 50px;
  margin-left: -0.5em;
  & > a > div {
    border-radius: 0px;
  }
`
const TitleGroup = styled(`hgroup`) `
  margin: 24px 0;
`

const Title = styled(`h1`) `
  font-size: 4.5em;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  margin-left: -0.05em;
  margin-top: 32px;
`
const Description = styled(`h2`) `
  font-size: 2.2em;
  font-weight: 100;
  margin-top: 0;
  color: #888;
`