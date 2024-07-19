import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <DropdownMenu />
      <h1>Hello World</h1>
    </div>
  );
};

export default LandingPage;
