import React from 'react'
import styles from './Button.module.css'

const BtnSalvar = ({...props}) => {
  return (
    <button className={`button-default ${styles.button}`} type='submit' {...props}>
      Salvar
      <i className='pi pi-save'></i>
    </button>
  )
}

export default BtnSalvar
