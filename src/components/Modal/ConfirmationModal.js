import React, { useState } from 'react'
import Modal from './Modal'
import FormContainer from '../Forms/Containers/FormContainer'
import styles from './ConfirmationModal.module.css'

const ConfirmationModal = ({title, message, confirmationFunction, active, setActive, ...props}) => {
  return (
    <Modal title={title} active={active} warning={true}>
      <p className={styles.message}>{message}</p>
      <FormContainer>
        <button
          className='button-default'
          onClick={() => setActive(false)}
        ><i className='pi pi-times'></i>Cancelar</button>
        <button 
          className='button-default'
          onClick={confirmationFunction}
        >Confirmar<i className='pi pi-check'></i></button>
      </FormContainer>
    </Modal>
  )
}

export default ConfirmationModal
