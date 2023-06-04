import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'

const BtnToggle = ({ active, ...props }) => {

  return (
    <button 
      className={`
        button-default
        ${active ? styles.active : ''}
        ${styles.button}
        ${styles.btnToggle}
      `}
      {...props}
    ><i className='pi pi-plus'></i></button>
  )
}

export default BtnToggle
