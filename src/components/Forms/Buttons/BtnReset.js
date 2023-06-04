import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'

const BtnReset = ({ ...props }) => {
  return (
    <button className={`button-default ${styles.button}`} {...props} type='reset'>
      <i className='pi pi-trash'></i>
      Limpar
    </button>
  )
}

export default BtnReset
