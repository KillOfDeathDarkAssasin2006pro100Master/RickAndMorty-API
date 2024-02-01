import React from 'react'
import st from './Button.module.css'

function Button({text, click}) {
  return (
    <button onClick={click}>{text}</button>
  )
}

export default Button