import React, {useState} from "react"
import styled from 'styled-components'

const color = {
  'primary':'orange'
}
function Price({price, reduction}){

  const actual = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price*(100- (reduction?reduction:0) )*.01)
  const initial = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)

  return(
    <Container>
      <span className="actual">{actual}</span>
      { reduction && 
        <>
        <span className="reduction">{reduction}</span>
        <span className="initial">{initial}</span>
        </>
      }
    </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:row;
  font-weight:600;
  align-items:center;
  margin:1em 0;
  span{
    display:block;

    &.actual{
      font-size:2em;
    }
    &.reduction{
      background:lightyellow;
      color:${color.primary};
      border-radius:.3em;
      padding:3px;
      margin-left:1em;
      &:after{
        content:'%';
      }
    }
    &.initial{
      margin-left:auto;
      color:grey;
      text-decoration:line-through;
    }
  }
`
export default Price
