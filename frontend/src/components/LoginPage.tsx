import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <DropdownMenu />
      <h1 className="page-title">Login Page</h1>
    </div>
  );
};

export default LoginPage;
