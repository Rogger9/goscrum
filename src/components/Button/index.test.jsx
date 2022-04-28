import { render, screen, fireEvent } from '@testing-library/react'
import Button from '.'

const handleClick = jest.fn()

describe('Button', () => {
  it('render', () => {
    render(<Button value='Send' />)
    const text = screen.getByText('Send')
    expect(text).toBeInTheDocument()
  })

  it('disabled', () => {
    render(<Button value='Send' {...{ handleClick }} isDisabled />)
    const button = screen.getByLabelText('Send')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
