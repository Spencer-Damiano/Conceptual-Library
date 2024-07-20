import React, { useState } from 'react';
import '../styles/ToDoList.css';

interface ToDoItem {
    text: string;
    completed: boolean;
}

const ToDoList = () => {
    const [items, setItems] = useState<ToDoItem[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleItemCompletion = (index: number) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    const editItem = (index: number, newText: string) => {
        const newItems = [...items];
        newItems[index].text = newText;
        setItems(newItems);
    };

    const deleteItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addItem();
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="todo-container">
            <div className="input-container">
                <button className="toggle-button" onClick={toggleExpand}>
                    {isExpanded ? '▼' : '▲'}
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a to-do item"
                />
                <button className="add-button" onClick={addItem}>+</button>
            </div>
            {isExpanded && (
                <ul className="todo-list">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`todo-item ${item.completed ? 'checked' : ''}`}
                        >
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={item.completed}
                                onChange={() => toggleItemCompletion(index)}
                            />
                            <span className="todo-item-content" onClick={() => toggleItemCompletion(index)}>
                                {item.text}
                            </span>
                            <button
                                className="edit-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const newText = prompt('Edit item', item.text);
                                    if (newText !== null) editItem(index, newText);
                                }}
                            >
                                ✎
                            </button>
                            <button
                                className="delete-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteItem(index);
                                }}
                            >
                                🗑
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ToDoList;
