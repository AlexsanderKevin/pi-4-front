import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'

const BtnLogar = ({ ...props }) => {
  return (
    <button className={`${styles.button}`} {...props} type='button'>
      <i className='pi pi-arrow-right'></i>
      Login
    </button>
  )
}

export default BtnLogar
