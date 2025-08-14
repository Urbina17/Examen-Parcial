import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [codigo, setCodigo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [pswd, setPswd] = useState('');

  const habilitarBoton =
    codigo.trim() !== '' && usuario.trim() !== '' && pswd.trim() !== '';

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (habilitarBoton) {
      onLogin({ codigo, usuario, pswd });
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Código de cliente"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <button type="submit" disabled={!habilitarBoton}>
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;

