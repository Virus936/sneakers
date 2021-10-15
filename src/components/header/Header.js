import React, {useState} from "react"
import styled from 'styled-components'
import Nav from '../nav/Nav'
import {ReactComponent as Logo} from '../../icons/logo.svg'
import {ReactComponent as Hamburger} from '../../icons/icon-menu.svg'
import {ReactComponent as Cart} from '../../icons/icon-cart.svg'
import Avatar from '../../icons/image-avatar.png'
import size from '../../params/setting'

function Header(){
  const [isActive, setIsActive] = useState(false)
  return(
    <Container>
      <Hamburger onClick={() => setIsActive(!isActive)}/>

      <Logo />
      <Nav isActive={isActive} setIsActive={setIsActive}  />
      <div className='item basket'>
        <Cart />
      </div>
      <div className="item">
        <img src={Avatar} alt="" />
      </div>
    </Container>
    )
}

const Container = styled.header`
  display:flex;
  align-items:center;
  width:100%;
  padding: .8em  1em ;
  >svg{
    margin-right:1em;
    cursor:pointer;
    @media(min-width:${size.mobile}){
      :nth-child(1){
        display:none;
      }
    }
  }
  .item{
    font-size:16px;
    cursor:pointer;
    width:2em;
    img{
      width:100%;
      aspect-ratio:1;
    }
    &.basket{
      margin-left:auto;
    }
  }


`


export default Header

