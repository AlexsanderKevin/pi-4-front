import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitch.module.css'

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()

  return (
    <label htmlFor="switchLanguage" className={styles.switchContainer}>
      <i className='pi pi-globe'></i>
      <select
        id='switchLanguage'
        name='switchLanguage'
        onChange={e => i18n.changeLanguage(e.target.value)}
        >
        <option value="pt">{t("Portuguese")}</option>
        <option value="en">{t("English")}</option>
      </select>
    </label>
  )
}

export default LanguageSwitch
