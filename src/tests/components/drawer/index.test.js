import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Drawer from '../../../components/drawer'

describe('Drawer component', () => {
  const onCloseMock = jest.fn()

  beforeEach(() => {
    onCloseMock.mockClear()
  })

  it('renders correctly when open', () => {
    const { getByTestId } = render(
      <Drawer open={true} onClose={onCloseMock}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Drawer>,
    )
    expect(getByTestId('drawer')).toHaveClass('open')
  })

  it('renders correctly when closed', () => {
    const { getByTestId } = render(
      <Drawer open={false} onClose={onCloseMock}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Drawer>,
    )
    expect(getByTestId('drawer')).not.toHaveClass('open')
  })

  it('calls onClose when clicked', () => {
    const { getByTestId } = render(
      <Drawer open={true} onClose={onCloseMock}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Drawer>,
    )
    fireEvent.click(getByTestId('drawer'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('renders children correctly', () => {
    const { getByText } = render(
      <Drawer open={true} onClose={onCloseMock}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Drawer>,
    )
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })
})
