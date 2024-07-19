import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import '../styles/LoginPage.css';
import '../styles/GlobalStyles.css';

interface User {
    username: string;
    // Add other properties as needed
}

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:443/api/auth/login', {
                username: username,
                password: password
            });
            console.log('Login successful:', response.data);

            const userData = response.data.User || response.data.user;
            if (userData) {
                localStorage.setItem('user', JSON.stringify(userData));
                console.log('Stored user:', localStorage.getItem('user'));
                setError(null);
                setUser(userData);
                navigate('/dashboard');
            } else {
                console.error('User data not found in response:', response.data);
                setError('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setError('Login failed. Please check your username and password.');
            console.error('Error logging in:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <div>
            <DropdownMenu />
            {user ? (
                <div>
                    <h1>Welcome, {user.username}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    {error && <p>{error}</p>}
                </div>
            )}
        </div>
    );
}

export default LoginPage;
