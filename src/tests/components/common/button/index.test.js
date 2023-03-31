import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../../../components/common/button'

describe('Button component', () => {
  it('should render a button element', () => {
    const { getByRole } = render(<Button />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render the children prop', () => {
    const text = 'Hello world'
    const { getByText } = render(<Button>{text}</Button>)
    const buttonElement = getByText(text)
    expect(buttonElement).toBeInTheDocument()
  })

  it('should apply the className prop to the button element', () => {
    const { getByRole } = render(<Button className="custom-class" />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  it('should apply the type prop to the button element', () => {
    const { getByRole } = render(<Button type="submit" />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  it('should apply the default type prop if no type prop is provided', () => {
    const { getByRole } = render(<Button />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveAttribute('type', 'button')
  })

  it('should call the onClick function provided in the props', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Button onClick={handleClick} />)
    const buttonElement = getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled()
  })
})
