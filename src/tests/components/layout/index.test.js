import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import Layout from '../../../components/layout'

describe('Layout component', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>,
    )

    expect(screen.getByText('menu-text-login')).toBeInTheDocument()
    expect(screen.getByText('menu-text-fetch')).toBeInTheDocument()
    expect(screen.getByText('menu-text-todo')).toBeInTheDocument()
  })

  it('opens the drawer when the menu button is clicked', () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>,
    )

    expect(screen.getByTestId('drawer')).not.toHaveClass('open')

    fireEvent.click(screen.getByTestId('menu-button'))

    expect(screen.getByTestId('drawer')).toHaveClass('open')
  })

  it('closes the drawer when a menu item is clicked', () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>,
    )

    fireEvent.click(screen.getByTestId('menu-button'))

    expect(screen.getByTestId('drawer')).toHaveClass('open')

    fireEvent.click(screen.getByText('menu-text-login'))

    expect(screen.getByTestId('drawer')).not.toHaveClass('open')
  })
})
