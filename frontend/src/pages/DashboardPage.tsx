import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/GlobalStyles.css';
import '../styles/DashboardPage.css';

interface User {
    username: string;
    // Add other properties as needed
}

const DashboardPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            console.log('Retrieved user from localStorage:', storedUser);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                navigate('/login');
            }
        } catch (err) {
            console.error('Error parsing user data from localStorage:', err);
            setError('Failed to load user data. Please log in again.');
            localStorage.removeItem('user');
            navigate('/login');
        }
    }, [navigate]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className="dashboard-container">
            <DropdownMenu />
            <h1>Dashboard</h1>
            <p>Welcome, {user.username}!</p>
        </div>
    );
};

export default DashboardPage;
