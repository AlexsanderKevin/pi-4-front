import React  from 'react'
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>{t("P.I 6th Period - 2024")}</footer>
  )
}

export default Footer
