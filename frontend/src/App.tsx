import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DropdownMenu from './components/DropdownMenu';
import './styles/GlobalStyles.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <DropdownMenu />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* Commenting out private route for dashboard */}
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
