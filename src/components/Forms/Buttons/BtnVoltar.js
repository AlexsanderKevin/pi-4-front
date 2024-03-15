import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BtnVoltar = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <Link className={`button-default ${styles.button}`} {...props} type='reset'>
      <i className='pi pi-arrow-left'></i>
      {t('Back')}
    </Link>
  )
}

export default BtnVoltar
