import React, {useState} from "react"
import styled from 'styled-components'
import {color} from '../../params/setting'

function Button({children}){
  return(
    <Container>
      {children}
    </Container>
    )
}
const Container = styled.button`
        display:block;
        background:${color.primary};
        text-align:center;
        outline:none;
        font-weight:600;
        padding:1em;
        color:white;
        border:none;
        border-radius:4px;
`

export default Button
