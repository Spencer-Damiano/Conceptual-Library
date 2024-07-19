import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/DashboardPage.css';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      alert('You need to log in first to access the dashboard.');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="DashboardPage">
      <DropdownMenu />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default DashboardPage;
