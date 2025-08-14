import React, { useState } from 'react';
import './LoginForm.css';

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
    <form className="login-form" onSubmit={manejarSubmit}>
      <h2 className="login-title">FinTrust</h2>
      <input
        type="text"
        placeholder="Código de cliente"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="login-input"
      />
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
        className="login-input"
      />
      <button
        type="submit"
        disabled={!habilitarBoton}
        className="login-button"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;


