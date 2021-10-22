import React, {useState} from "react"
import styled from 'styled-components'
import Nav from '../nav/Nav'
import {ReactComponent as Logo} from '../../icons/logo.svg'
import {ReactComponent as Hamburger} from '../../icons/icon-menu.svg'
import {ReactComponent as Cart} from '../../icons/icon-cart.svg'
import Avatar from '../../icons/image-avatar.png'
import size,{color} from '../../params/setting'


import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from '../../features/counter/counterSlice';





function Header(){
  const [isActive, setIsActive] = useState(false)
  const count = useSelector(selectCount)

  return(
    <Container>
      <Hamburger onClick={() => setIsActive(!isActive)}/>

      <Logo />
      <Nav isActive={isActive} setIsActive={setIsActive}  />
      <div className='item basket'>
        <Cart />
        { count!=0&& <span> {count} </span> }

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
      position:relative;
      margin-left:auto;
      span{
        display:block;
        position:absolute;
        top:-25%;
        right:25%;
        background:${color.primary};
        width:2em;
        aspect-ratio:1;
        border-radius:99em;
        text-align:center;
        font-size:.4em;
        font-weight:600;
      }
    }
  }


`


export default Header

