import { render, screen } from '@testing-library/react'
import Donate from '.'

describe('Donate view', () => {
  it('render a h1', () => {
    render(<Donate />)
    const expected = screen.getByRole('heading', { level: 1, name: 'Colaborá con el proyecto' })
    expect(expected).toBeInTheDocument()
  })

  it('render an anchor with href', () => {
    render(<Donate />)
    const expected = screen.getByRole('link')
    expect(expected).toHaveAttribute('href', 'https://mpago.la/15uKFrk')
  })

  it('render an anchor with blank target', () => {
    render(<Donate />)
    const expected = screen.getByRole('link')
    expect(expected).toHaveAttribute('target', '_blank')
  })
})
