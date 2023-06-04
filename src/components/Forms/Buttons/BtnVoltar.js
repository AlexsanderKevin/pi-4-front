import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'

const BtnVoltar = ({ ...props }) => {
  return (
    <button className={`button-default ${styles.button}`} {...props} type='reset'>
      <i className='pi pi-arrow-left'></i>
      Voltar
    </button>
  )
}

export default BtnVoltar
