import React from 'react';

function LoginForm({ onLogin }) {
  return (
    <form>
      <input type="text" placeholder="Código de cliente" />
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button disabled>Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
