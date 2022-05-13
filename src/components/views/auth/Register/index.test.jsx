import { render, screen } from '@testing-library/react'
import Register from '.'

beforeEach(() => render(<Register />))

describe('Register form', () => {
  it('render', () => {
    const text = screen.getByLabelText('Nombre de usuario')
    expect(text).toBeInTheDocument()
  })
})
