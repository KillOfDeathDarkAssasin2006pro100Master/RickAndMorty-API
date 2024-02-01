import React from 'react';
import st from './LItem.module.css';

function LItem({data, img}) {
  return (
    <>
    <div className={st.litem}>
        <img className={st.image} src={img}/>
        <h1>{data[0]} - {data[1]}</h1>
    </div>
    </>
  )
}

export default LItem