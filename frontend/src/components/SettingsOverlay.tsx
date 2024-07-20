import React, { useState } from 'react';
import '../styles/SettingsOverlay.css';

interface SettingsOverlayProps {
    onClose: () => void;
    onApplyTimerSettings: (session: { study: number; break: number; label: string }) => void;
}

const studySessions = [
    { study: 5 * 1000, break: 3 * 1000, label: 'Test (5s study / 3s break)' },
    { study: 25 * 60 * 1000, break: 5 * 60 * 1000, label: 'Pomodoro (25m study / 5m break)' },
    { study: 45 * 60 * 1000, break: 15 * 60 * 1000, label: 'Long (45m study / 15m break)' },
];

const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const SettingsOverlay: React.FC<SettingsOverlayProps> = ({ onClose, onApplyTimerSettings }) => {
    const [selectedOption, setSelectedOption] = useState(studySessions[0]);
    const [activeTab, setActiveTab] = useState('timer');

    const handleOptionChange = (session: typeof studySessions[0]) => {
        setSelectedOption(session);
    };

    const handleApply = () => {
        onApplyTimerSettings(selectedOption);
        onClose();
    };

    return (
        <div className="settings-overlay">
            <div className="settings-content">
                <div className="header-buttons">
                    <button className={`tab-button ${activeTab === 'timer' ? 'active' : ''}`} onClick={() => setActiveTab('timer')}>Timer Settings</button>
                    <button className={`tab-button ${activeTab === 'music' ? 'active' : ''}`} onClick={() => setActiveTab('music')}>Music Settings</button>
                    <button className={`tab-button ${activeTab === 'soundscape' ? 'active' : ''}`} onClick={() => setActiveTab('soundscape')}>Soundscape Settings</button>
                    <button className={`tab-button ${activeTab === 'other' ? 'active' : ''}`} onClick={() => setActiveTab('other')}>Other</button>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="settings-panel">
                    {activeTab === 'timer' && (
                        <div>
                            <h2>Select Study Session</h2>
                            <table className="session-table">
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                        <th>Study Time</th>
                                        <th>Break Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studySessions.map(session => (
                                        <tr
                                            key={session.label}
                                            className={selectedOption.label === session.label ? 'selected' : ''}
                                            onClick={() => handleOptionChange(session)}
                                        >
                                            <td>{session.label}</td>
                                            <td>{formatTime(session.study)}</td>
                                            <td>{formatTime(session.break)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="apply-button" onClick={handleApply}>Apply</button>
                        </div>
                    )}
                    {activeTab === 'music' && (
                        <div>
                            <h2>Music Settings</h2>
                            <button className="music-button">Lofi</button>
                            <button className="music-button">Classical</button>
                            <div className="volume-control">
                                <label htmlFor="music-volume">Volume</label>
                                <input type="range" id="music-volume" name="music-volume" min="0" max="100" />
                            </div>
                        </div>
                    )}
                    {activeTab === 'soundscape' && (
                        <div>
                            <h2>Soundscape Settings</h2>
                            <button className="soundscape-button">Thunderstorm</button>
                            <button className="soundscape-button">White Noise</button>
                            <button className="soundscape-button">Creek</button>
                            <div className="volume-control">
                                <label htmlFor="soundscape-volume">Volume</label>
                                <input type="range" id="soundscape-volume" name="soundscape-volume" min="0" max="100" />
                            </div>
                        </div>
                    )}
                    {activeTab === 'other' && (
                        <div>
                            <h2>Other Settings</h2>
                            <div className="checkbox-container">
                                <input type="checkbox" id="dimming-volume" name="dimming-volume" />
                                <label htmlFor="dimming-volume">Dimming Volume</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsOverlay;
