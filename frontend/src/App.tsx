import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import DropdownMenu from './components/DropdownMenu';
import './styles/GlobalStyles.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="header">
                <DropdownMenu />
            </div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
