import React, { useState } from 'react'
import Modal from './Modal'
import FormContainer from '../Forms/Containers/FormContainer'
import styles from './ConfirmationModal.module.css'
import { useTranslation } from 'react-i18next'

const ConfirmationModal = ({title, message, confirmationFunction, active, setActive, ...props}) => {
  const { t } = useTranslation()

  return (
    <Modal title={title} active={active} warning={true}>
      <p className={styles.message}>{message}</p>
      <FormContainer>
        <button
          className='button-default'
          onClick={() => setActive(false)}
        ><i className='pi pi-times'></i>{t('Cancel')}</button>
        <button 
          className='button-default'
          onClick={confirmationFunction}
        >{t('Confirm')}<i className='pi pi-check'></i></button>
      </FormContainer>
    </Modal>
  )
}

export default ConfirmationModal
