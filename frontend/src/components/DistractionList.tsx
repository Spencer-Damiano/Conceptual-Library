import React from 'react';
import '../styles/DistractionList.css';

interface DistractionListProps {
    isBreak: boolean;
}

const DistractionList: React.FC<DistractionListProps> = ({ isBreak }) => {
    // Add your component logic here
    return (
        <div className="distraction-container">
            {/* Your DistractionList JSX goes here */}
            <h2>Distraction List</h2>
            <p>{isBreak ? 'You can see your distractions now.' : 'Focus on your study!'}</p>
            {/* Add your distraction list items and logic */}
        </div>
    );
};

export default DistractionList;
