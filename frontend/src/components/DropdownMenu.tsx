import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <Link to="/login">Login</Link>
        </div>
    );
};

export default DropdownMenu;
