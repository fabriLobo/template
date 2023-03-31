import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from '../../../../components/common/input'

describe('Input component', () => {
  const onChangeMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with required props', () => {
    const { getByLabelText } = render(
      <Input
        name="username"
        label="Username"
        value="test"
        onChange={onChangeMock}
      />,
    )
    expect(getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders correctly with all props', () => {
    const { getByLabelText, getByPlaceholderText, getByTestId } = render(
      <Input
        name="username"
        label="Username"
        type="text"
        value="test"
        onChange={onChangeMock}
        placeholder="Enter your username"
        required={true}
        helperText="Please enter your username"
        inputCustomStyles="custom-styles"
      />,
    )
    const inputContainer = getByTestId('custom-input-container')
    const inputLabel = getByTestId('custom-input-label')
    const inputElement = getByTestId('custom-input')
    const helperText = getByTestId('custom-input-helper-text')

    expect(inputContainer).toBeInTheDocument()
    expect(inputLabel).toHaveTextContent('Username')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('name', 'username')
    expect(inputElement).toHaveValue('test')
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your username')
    expect(inputElement).toBeRequired()
    expect(helperText).toHaveTextContent('Please enter your username')
    expect(inputElement).toHaveClass('custom-styles')
  })

  it('calls onChange when input value changes', () => {
    const { getByLabelText } = render(
      <Input
        name="username"
        label="Username"
        value="test"
        onChange={onChangeMock}
      />,
    )
    const inputElement = getByLabelText('Username')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('does not render label if label prop is not provided', () => {
    const { queryByTestId } = render(
      <Input name="username" value="test" onChange={onChangeMock} />,
    )
    expect(queryByTestId('custom-input-label')).not.toBeInTheDocument()
  })

  it('does not render helper text if helperText prop is not provided', () => {
    const { queryByTestId } = render(
      <Input
        name="username"
        label="Username"
        value="test"
        onChange={onChangeMock}
      />,
    )
    expect(queryByTestId('custom-input-helper-text')).not.toBeInTheDocument()
  })

  it('renders without inputCustomStyles class if inputCustomStyles prop is not provided', () => {
    const { getByTestId } = render(
      <Input
        name="username"
        label="Username"
        value="test"
        onChange={onChangeMock}
      />,
    )
    expect(getByTestId('custom-input')).not.toHaveClass('custom-styles')
  })
})
