import React from 'react'
import styles from './Button.module.css'
import { useTranslation } from 'react-i18next'

const BtnSalvar = ({...props}) => {
  const { t } = useTranslation()
  return (
    <button className={`button-default ${styles.button}`} type='submit' {...props}>
      {t('Save')}
      <i className='pi pi-save'></i>
    </button>
  )
}

export default BtnSalvar
