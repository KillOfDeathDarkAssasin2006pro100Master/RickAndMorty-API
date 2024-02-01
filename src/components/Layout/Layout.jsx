import React from 'react';
import Title from '../UI/Title/Title';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <Title text='Rick and Mroty api' crl='red'/>
      {children}
    </>
  )
}

export default Layout