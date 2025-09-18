import React from 'react';
import "../assets/css/button.css";

const Button = ({text,bg}) => {
  return (
    <button style={{backgroundColor:bg}} className='btn'>{text}</button>
  )
}

export default Button