import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('el botón está deshabilitado al iniciar', () => {
  render(<LoginForm onLogin={jest.fn()} />);
  const boton = screen.getByRole('button', { name: /iniciar sesión/i });
  expect(boton).toBeDisabled();
});
