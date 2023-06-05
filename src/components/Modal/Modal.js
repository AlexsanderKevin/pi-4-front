import React from 'react'
import styles from './Modal.module.css'
import Title from '../Title/Title'

const Modal = ({children, title, active, warning}) => {

  if (active) return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Title className={warning ? 'warning' : ''}>{title}</Title>
        {children}
      </div>
    </div>
  )

  else return null
}

export default Modal
