import React, { useState } from 'react';
import '../styles/ToDoList.css';

interface ToDoItem {
    text: string;
    completed: boolean;
}

interface ToDoListProps {
    isSettingsOpen: boolean;
}

const ToDoList: React.FC<ToDoListProps> = ({ isSettingsOpen }) => {
    const [items, setItems] = useState<ToDoItem[]>([]);
    const [inputValue, setInputValue] = useState('');

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

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`todo-container ${isSettingsOpen ? 'disabled' : ''}`}>
            <div className="input-container">
                <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)} disabled={isSettingsOpen}>
                    {isExpanded ? '⬇' : '⬆'}
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a task"
                    disabled={isSettingsOpen}
                />
                <button className="add-button" onClick={addItem} disabled={isSettingsOpen}>+</button>
            </div>
            {isExpanded && (
                <div className="todo-list">
                    {items.map((item, index) => (
                        <div key={index} className="todo-item">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={item.completed}
                                onChange={() => toggleComplete(index)}
                                disabled={isSettingsOpen}
                            />
                            <span className={`todo-item-content ${item.completed ? 'completed' : ''}`}>
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

export default ToDoList;
