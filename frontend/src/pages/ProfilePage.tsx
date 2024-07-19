import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/GlobalStyles.css';
import '../styles/ProfilePage.css';

interface User {
    username: string;
    // Add other properties as needed
}

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
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
        return null; // Optionally, you can return a loading spinner here
    }

    return (
        <div className="profile-container">
            <DropdownMenu />
            <h1>Profile Page</h1>
            <p>Welcome, {user.username}!</p>
            <p>This is a placeholder for the profile page.</p>
        </div>
    );
};

export default ProfilePage;
