import React, {useState} from "react"
import styled from 'styled-components'
import Carouselle from '../carousel/Carousel'
import Price from '../price/Price'
import size, {color} from '../../params/setting'
import OrderForm from '../form/OrderForm'

function Main() {

  //const onSubmit = e=> e.preventDefault()
  return (
    <Container>
      <Carouselle />
      <div className="desc">
        <h1 className="enterprise">sneaker company</h1>
        <h1 className="product__title">fall limited edition sneakers</h1>
        <p>These low-profile sneakers are your perfect casual weaer companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <Price
          price={250}
          reduction={12}
        />
        <OrderForm  />
      </div>
    </Container>
  )
}

const Container = styled.main`
  @media(min-width:${size.mobile}){
    display:flex;
    margin:auto;
    max-width:900px;
    >div:nth-child(1){
      flex:1;
    }
    >div:nth-child(2){
      flex:1;
    }

  }
  .desc{
    padding:1em;
    .enterprise{
      text-transform:uppercase;
      font-size:1em;
      color:${color.primary};
      letter-spacing:2px;
      margin: .5em 0;
    }
    .product__title{
      text-transform:capitalize;
      margin: .5em 0;
    }

    p{
      line-height:1.5em;
    }
  }
`

export default Main

