import React, {useState} from "react"
import styled from 'styled-components'
import {ReactComponent as Close} from '../../icons/icon-close.svg'
import size from '../../params/setting'

function Nav({isActive, setIsActive}){
  return(
    <Container className={isActive&&'active'}>
      <div>
        <span onClick={() => setIsActive(!isActive)}><Close /></span>
        <a>collections</a>
        <a>men</a>
        <a>women</a>
        <a>about</a>
        <a href="#">contact</a>
      </div>
    </Container>
    )
}
const Container = styled.nav`
  position:absolute;
  display:flex;
  flex-direction:row;
  background:rgba(0,0,0,.7);
  transform:translateX(-100%);
  top:0;
  bottom:0;
  left:0;
  right:0;
  @media(min-width:${size.mobile}){
    position:relative;
    width:auto;
    transform:none;
    background:transparent;
  }

  &.active{
    transform:translateX(0);

    div{
      transform:translateX(0%);
      transition:transform .2s linear;
    }
  }
  div{
    background:white;
    transform:translateX(-100%);
    width:80%;
    transition:transform .2s linear;

    @media(min-width:${size.mobile}){
      display:flex;
      transform:none;
      width:auto;
      background:transparent;
    }

    >*{
      font-size:18px;
      padding:.4em 1.5em;
      cursor:pointer;
      @media(min-width:${size.mobile}){
        font-size:16px;
      }
    }

    span{
      display:block;
      color:grey;
      padding-top:1em;
      padding-bottom:3em;
      @media(min-width:${size.mobile}){
        display:none;
      }

    }
    a{
      display:block;
      text-transform:capitalize;
      font-weight:600;
      text-decoration:inherit;
      color:inherit;
      @media(min-width:${size.mobile}){
        color:grey;
        font-weight:400;
      }
    }
  }
`

export default Nav
