import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()

  return (
    <select 
      onChange={e => i18n.changeLanguage(e.target.value)}
      >
      <option value="pt">{t("Portuguese")}</option>
      <option value="en">{t("English")}</option>
    </select>
  )
}

export default LanguageSwitch
