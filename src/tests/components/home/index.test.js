import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomeContainer from '../../../components/home'

jest.mock('react-redux')
jest.mock('react-router-dom')
jest.mock('react-i18next')

describe('HomeContainer component', () => {
  const dispatchMock = jest.fn()
  const navigateMock = jest.fn()

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock)
    useNavigate.mockReturnValue(navigateMock)
    useTranslation.mockReturnValue({
      t: jest.fn().mockImplementation((key) => key),
    })
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<HomeContainer />)
    expect(getByTestId('home-container')).toBeInTheDocument()
  })

  it('calls actionsAfterLogout when the logout button is clicked', () => {
    const { getByTestId } = render(<HomeContainer />)
    fireEvent.click(getByTestId('home-container-button'))
    expect(dispatchMock).toHaveBeenCalledTimes(1)
    expect(navigateMock).toHaveBeenCalledTimes(1)
  })

  it('translates the home page title correctly', () => {
    const { getByTestId } = render(<HomeContainer />)
    expect(getByTestId('home-container-text')).toHaveTextContent(
      'home-page-title',
    )
  })

  it('translates the logout button text correctly', () => {
    const { getByTestId } = render(<HomeContainer />)
    expect(getByTestId('home-container-button')).toHaveTextContent(
      'logout-btn-text',
    )
  })
})
