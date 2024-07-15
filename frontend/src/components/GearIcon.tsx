import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/GearIcon.css';


const GearIcon = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="gear-icon">
            <i className="fas fa-cog" onClick={toggleMenu}></i>
            {showMenu && <DropdownMenu />}
        </div>
    );
};

export default GearIcon;
