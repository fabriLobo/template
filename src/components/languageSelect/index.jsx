import { useState } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const LanguageSelect = () => {
  const { t } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div data-testid="language-select">
      <label data-testid="language-select-label">
        {t('language-select-label')}:{' '}
      </label>
      <select
        data-testid="language-select-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option data-testid="language-select-option1" value="en">
          {t('language-select-en-option')}
        </option>
        <option data-testid="language-select-option2" value="es">
          {t('language-select-es-option')}
        </option>
      </select>
    </div>
  )
}

export default LanguageSelect
