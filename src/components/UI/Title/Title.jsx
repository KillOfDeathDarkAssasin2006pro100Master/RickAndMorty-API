import React from 'react';
import st from './Title.module.css';

function Title({text, crl}) {
  return (
    <h1 className={st.title} style={{color:crl}}>{text}</h1>
  )
}

export default Title