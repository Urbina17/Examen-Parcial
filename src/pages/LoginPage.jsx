import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function LoginPage() {
  const handleLogin = (data) => {
    alert(`Código: ${data.codigo}, Usuario: ${data.usuario}, Contraseña: ${data.pswd}`);
    console.log('Datos enviados:', data);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;

