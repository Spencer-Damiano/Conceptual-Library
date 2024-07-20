import React, { useState, useEffect } from 'react';
import '../styles/DistractionList.css';

interface DistractionItem {
    text: string;
    completed: boolean;
}

interface DistractionListProps {
    isBreak: boolean;
    isSettingsOpen: boolean;
}

const DistractionList: React.FC<DistractionListProps> = ({ isBreak, isSettingsOpen }) => {
    const [items, setItems] = useState<DistractionItem[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (!isBreak) {
            setIsExpanded(false);
        }
    }, [isBreak]);

    const addItem = () => {
        if (inputValue.trim()) {
            setItems([...items, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleComplete = (index: number) => {
        setItems(items.map((item, i) => (i === index ? { ...item, completed: !item.completed } : item)));
    };

    const deleteItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className={`distraction-container ${isSettingsOpen ? 'disabled' : ''}`}>
            <div className="input-container">
                <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)} disabled={!isBreak || isSettingsOpen}>
                    {isExpanded ? '⬇' : '⬆'}
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a distraction"
                    disabled={isSettingsOpen}
                />
                <button className="add-button" onClick={addItem} disabled={isSettingsOpen}>+</button>
            </div>
            {isExpanded && (
                <div className="distraction-list">
                    {items.map((item, index) => (
                        <div key={index} className="distraction-item">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={item.completed}
                                onChange={() => toggleComplete(index)}
                                disabled={isSettingsOpen}
                            />
                            <span className={`distraction-item-content ${item.completed ? 'completed' : ''}`}>
                                {item.text}
                            </span>
                            <button className="edit-button" disabled={isSettingsOpen}>✏</button>
                            <button className="delete-button" onClick={() => deleteItem(index)} disabled={isSettingsOpen}>🗑️</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DistractionList;
