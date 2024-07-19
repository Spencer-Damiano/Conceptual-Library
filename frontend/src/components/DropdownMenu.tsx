import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = !!localStorage.getItem('user');
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                ☰
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <Link to="/">Landing</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/profile">Profile</Link>
                            <Link to="/" onClick={handleLogout}>Logout</Link>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
