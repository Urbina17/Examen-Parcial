import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('el botón se habilita solo cuando los tres campos están completos', () => {
  render(<LoginForm onLogin={jest.fn()} />);
  
  const codigoCliente = screen.getByPlaceholderText(/código de cliente/i);
  const usuario = screen.getByPlaceholderText(/usuario/i);
  const contrasena = screen.getByPlaceholderText(/contraseña/i);
  const boton = screen.getByRole('button', { name: /iniciar sesión/i });

  // Antes de llenar campos
  expect(boton).toBeDisabled();

  // No se llenan todos los campos
  fireEvent.change(codigoCliente, { target: { value: '123' } });
  fireEvent.change(usuario, { target: { value: 'diego' } });
  expect(boton).toBeDisabled();

  // Llenar el último campo
  fireEvent.change(contrasena, { target: { value: '1234' } });
  expect(boton).toBeEnabled();
});

