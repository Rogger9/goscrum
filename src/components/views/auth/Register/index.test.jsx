import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Register from '.'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

const server = setupServer(
  rest.get(`${API_ENDPOINT}auth/data`, (_, res, context) => {
    return res(context.json({
      result: {
        continente: ['America', 'Europa', 'Otro'],
        region: ['Otro', 'Latam', 'Brasil', 'America del norte'],
        Rol: ['Team Leader', 'Team Member']
      }
    }))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

describe('Register form', () => {
  it('render', () => {
    render(<Register />, { wrapper: MemoryRouter })
    const text = screen.getByLabelText('Nombre de usuario')
    expect(text).toBeInTheDocument()
  })

  it('fetch options', async () => {
    render(<Register />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('option', { name: 'Seleccionar rol...' })
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('option', { name: 'Europa' })
    ).toBeInTheDocument()
  })
})
