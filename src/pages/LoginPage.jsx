import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function LoginPage() {
  const handleLogin = (data) => {
    alert(`Código: ${data.codigo}, Usuario: ${data.usuario}, Contraseña: ${data.pswd}`);
    console.log('Datos enviados:', data);
  };

  return (
    <div
      style={{
        backgroundColor: '#1e293b',
        minHeight: '100vh',       
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'      
      }}
    >
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;


