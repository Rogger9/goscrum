import { render, screen } from '@testing-library/react'
import Register from '.'

beforeEach(() => render(<Register />))

describe('Register form', () => {
  it('render', () => {
    const text = screen.getByLabelText('Usuario')
    expect(text).toBeInTheDocument()
  })
})
