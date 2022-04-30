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
    const text = screen.getByLabelText('Email')
    expect(text).toBeInTheDocument()
  })

  it('validate email', async () => {
    const email = screen.getByLabelText('Email')
    await waitFor(() => fireEvent.change(email, { target: { value: 'asd' } }))
    const msg = await screen.findByText('Ingrese un correo electrónico válido')
    await waitFor(() => expect(msg).toBeInTheDocument())
  })

  it('validate password', async () => {
    const input = screen.getByLabelText('Contraseña')
    await waitFor(() => fireEvent.change(input, { target: { value: 'password' } }))
    const msg = await screen.findByText('Ingrese una contraseña válida. Extensión mínima de 6 caracteres, incluyendo mínimo una letra mayúscula y un número.')
    await waitFor(() => expect(msg).toBeInTheDocument())
  })
})
