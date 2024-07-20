import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import Timer from '../components/Timer';
import ToDoList from '../components/ToDoList';
import DistractionList from '../components/DistractionList';
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
    const [isStudying, setIsStudying] = useState(true);

    // useEffect(() => {
    //     try {
    //         const storedUser = localStorage.getItem('user');
    //         console.log('Retrieved user from localStorage:', storedUser);
    //         if (storedUser) {
    //             setUser(JSON.parse(storedUser));
    //         } else {
    //             navigate('/login');
    //         }
    //     } catch (err) {
    //         console.error('Error parsing user data from localStorage:', err);
    //         setError('Failed to load user data. Please log in again.');
    //         localStorage.removeItem('user');
    //         navigate('/login');
    //     }
    // }, [navigate]);

    // if (error) {
    //     return <p>{error}</p>;
    // }

    // if (!user) {
    //     return null;
    // }

    return (
        <div className="dashboard-container">
            <div className="header">
                <DropdownMenu />
            </div>
            <div className="main">
                <Timer onStateChange={(state) => setIsStudying(state)} />
            </div>
            <div className="footer">
                <ToDoList />
                <DistractionList isBreak={!isStudying} />
            </div>
        </div>
    );
};

export default DashboardPage;
