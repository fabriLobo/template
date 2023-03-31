import React from 'react'
import { render } from '@testing-library/react'
import Loading from '../../../../components/common/Loading'

describe('Loading component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Loading />)
    expect(getByTestId('loading')).toBeInTheDocument()
  })

  it('displays the correct text', () => {
    const { getByText } = render(<Loading />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('has the correct class', () => {
    const { getByTestId } = render(<Loading />)
    expect(getByTestId('loading')).toHaveClass('custom-loading')
  })
})
