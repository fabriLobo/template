import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import i18n from 'i18next'
import LanguageSelect from '../../../components/languageSelect'

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    const translate = (key) => key
    return { t: translate }
  },
}))

describe('LanguageSelect component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<LanguageSelect />)
    expect(getByTestId('language-select')).toBeInTheDocument()
  })

  it('changes the language when an option is selected', () => {
    const { getByTestId } = render(<LanguageSelect />)
    const selectElement = getByTestId('language-select-select')
    fireEvent.change(selectElement, { target: { value: 'es' } })
    expect(i18n.changeLanguage).toHaveBeenCalledWith('es')
  })

  it('translates the label correctly', () => {
    const { getByTestId } = render(<LanguageSelect />)
    expect(getByTestId('language-select-label')).toHaveTextContent(
      'language-select-label:',
    )
  })

  it('translates the English option correctly', () => {
    const { getByTestId } = render(<LanguageSelect />)
    expect(getByTestId('language-select-option1')).toHaveTextContent(
      'language-select-en-option',
    )
  })

  it('translates the Spanish option correctly', () => {
    const { getByTestId } = render(<LanguageSelect />)
    expect(getByTestId('language-select-option2')).toHaveTextContent(
      'language-select-es-option',
    )
  })
})
