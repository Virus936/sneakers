import React, {useState} from "react"
import styled from 'styled-components'
import Button from '../button/Button'
import size, {color} from '../../params/setting'

function OrderForm({onSubmit}){
  return(
    <Container onSubmit={onSubmit}>
      <div>
        <span className="decrement">-</span>
        <input type="number" min='0' max="10"  name="number" />
        <span className="increment">+</span>
      </div>
      <Button>Ajouter au panier </Button>
    </Container>
    )
}
const Container = styled.form`
  display:flex;
  flex-direction:column;
  gap:1em;
  @media(min-width:${size.mobile}){
    flex-direction:row;
  }
  div{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    background:lightblue;
    padding:1em 2em;
    border-radius:4px;
    >*{
      font-weight:600;
      font-size:1em;
    }
    input[type=number] {
      -moz-appearance: textfield;
      border:none;
      background:transparent;
      outline:none;
      width:4ch;
      text-align:center;
    }
    span{
      color:${color.primary};
      display:flex;
      align-items:center;
      &.increment{

      }
      &.decrement{

      }
    }
  }

`

export default OrderForm
