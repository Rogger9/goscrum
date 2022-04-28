import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from '.'

beforeEach(() => render(<Login />))

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Login form', () => {
  it('render', () => {
    const text = screen.getByLabelText('Usuario')
    expect(text).toBeInTheDocument()
  })

  it('validate username', async () => {
    const input = screen.getByLabelText('Usuario')
    await waitFor(() => fireEvent.change(input, { target: { value: 'nametest1' } }))
    const msg = await screen.findByText('Ingrese un nombre de usuario válido')
    await waitFor(() => expect(msg).toBeInTheDocument())
  })

  it('validate password', async () => {
    const input = screen.getByLabelText('Contraseña')
    await waitFor(() => fireEvent.change(input, { target: { value: 'password' } }))
    const msg = await screen.findByText('Ingrese una contraseña válida. Extensión mínima de 6 caracteres, incluyendo mínimo una letra mayúscula y un número.')
    await waitFor(() => expect(msg).toBeInTheDocument())
  })
})
