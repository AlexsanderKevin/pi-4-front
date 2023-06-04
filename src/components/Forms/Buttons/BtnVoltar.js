import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'
import { Link } from 'react-router-dom'

const BtnVoltar = ({ ...props }) => {
  return (
    <Link className={`button-default ${styles.button}`} {...props} type='reset'>
      <i className='pi pi-arrow-left'></i>
      Voltar
    </Link>
  )
}

export default BtnVoltar
