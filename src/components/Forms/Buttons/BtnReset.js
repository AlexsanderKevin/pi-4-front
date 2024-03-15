import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'
import { useTranslation } from 'react-i18next'

const BtnReset = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <button className={`button-default ${styles.button}`} {...props} type='reset'>
      <i className='pi pi-trash'></i>
      {t('Clear')}
    </button>
  )
}

export default BtnReset
