import React, {useState} from "react"
import styled from 'styled-components'
import Button from '../button/Button'
import size, {color} from '../../params/setting'

import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../features/counter/counterSlice.js';

function OrderForm(){
  const [number, setNumber] = useState(0)

  const handleNumber = option => {
    if (option === 'minus' && number > 0) {
        setNumber(number-1)
    }
    if (option === 'plus' && number<10) {
      setNumber(number+1)
    }
  }

  const onSubmit = e => {
    e.preventDefault() 
    dispatch(incrementByAmount(number))
    setNumber(0)
  }
  const dispatch = useDispatch()


  return(
    <Container onSubmit={onSubmit}>
      <div>
        <span onClick={()=>handleNumber('minus')} className="decrement">-</span>
        <input type="number" min='0' max="10"  name="number" value={number} />
        <span onClick={()=> handleNumber('plus')} className="increment">+</span>
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
    background:lightblue;
    padding:1em 2em;
    border-radius:4px;
    flex:1;
    >*{
      font-weight:600;
      font-size:1em;
    }
    input[type=number] {
      -moz-appearance: textfield;
      border:none;
      background:transparent;
      outline:none;
      text-align:center;
      width:100%;;
    }
    span{
      color:${color.primary};
      display:flex;
      align-items:center;
      user-select:none;
      cursor:pointer;
      &.increment{

      }
      &.decrement{

      }
    }
  }

`

export default OrderForm
