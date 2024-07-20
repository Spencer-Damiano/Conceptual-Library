import React, { useState } from 'react';
import '../styles/SettingsOverlay.css';

interface SettingsOverlayProps {
    onClose: () => void;
    onApplyTimerSettings: (session: { study: number; break: number; label: string }) => void;
}

const studySessions = [
    { study: 5 * 1000, break: 3 * 1000, label: 'Test (00:00:05 / 00:00:03)' },
    { study: 25 * 60 * 1000, break: 5 * 60 * 1000, label: 'Pomodoro (00:25:00 / 00:05:00)' },
    { study: 45 * 60 * 1000, break: 15 * 60 * 1000, label: 'Long (00:45:00 / 00:15:00)' },
];

const SettingsOverlay: React.FC<SettingsOverlayProps> = ({ onClose, onApplyTimerSettings }) => {
    const [activeTab, setActiveTab] = useState<string>('timer');
    const [selectedSession, setSelectedSession] = useState<string>(studySessions[0].label);
    const [selectedMusic, setSelectedMusic] = useState<string>('None');
    const [selectedSoundscape, setSelectedSoundscape] = useState<string>('None');
    const [isMusicMuted, setIsMusicMuted] = useState(false);
    const [isSoundscapeMuted, setIsSoundscapeMuted] = useState(false);
    const [isMasterMuted, setIsMasterMuted] = useState(false);

    const handleApplyTimerSettings = () => {
        const session = studySessions.find((session) => session.label === selectedSession);
        if (session) {
            onApplyTimerSettings(session);
        }
    };

    const handleMusicSelect = (music: string) => {
        setSelectedMusic(music);
    };

    const handleSoundscapeSelect = (soundscape: string) => {
        setSelectedSoundscape(soundscape);
    };

    const handleMuteToggle = (type: 'music' | 'soundscape' | 'master') => {
        switch (type) {
            case 'music':
                setIsMusicMuted(!isMusicMuted);
                break;
            case 'soundscape':
                setIsSoundscapeMuted(!isSoundscapeMuted);
                break;
            case 'master':
                setIsMasterMuted(!isMasterMuted);
                break;
            default:
                break;
        }
    };

    return (
        <div className="settings-overlay">
            <div className="settings-content">
                <div className="header-buttons">
                    <button
                        className={`tab-button ${activeTab === 'timer' ? 'active' : ''}`}
                        onClick={() => setActiveTab('timer')}
                    >
                        Timer Settings
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'audio' ? 'active' : ''}`}
                        onClick={() => setActiveTab('audio')}
                    >
                        Audio Settings
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'other' ? 'active' : ''}`}
                        onClick={() => setActiveTab('other')}
                    >
                        Other Settings
                    </button>
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="settings-panel">
                    {activeTab === 'timer' && (
                        <div>
                            <table className="session-table">
                                <thead>
                                    <tr>
                                        <th>Session</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studySessions.map((session) => (
                                        <tr
                                            key={session.label}
                                            className={selectedSession === session.label ? 'selected' : ''}
                                            onClick={() => setSelectedSession(session.label)}
                                        >
                                            <td>{session.label}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="apply-button" onClick={handleApplyTimerSettings}>
                                Apply
                            </button>
                        </div>
                    )}
                    {activeTab === 'audio' && (
                        <div>
                            <table className="audio-settings-table">
                                <thead>
                                    <tr>
                                        <th>Music Settings</th>
                                        <th>Soundscape Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button
                                                className={`audio-button ${selectedMusic === 'None' ? 'selected' : ''}`}
                                                onClick={() => handleMusicSelect('None')}
                                            >
                                                None
                                            </button>
                                            <button
                                                className={`audio-button ${selectedMusic === 'Lofi' ? 'selected' : ''}`}
                                                onClick={() => handleMusicSelect('Lofi')}
                                            >
                                                Lofi
                                            </button>
                                            <button
                                                className={`audio-button ${selectedMusic === 'Classical' ? 'selected' : ''}`}
                                                onClick={() => handleMusicSelect('Classical')}
                                            >
                                                Classical
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className={`audio-button ${selectedSoundscape === 'None' ? 'selected' : ''}`}
                                                onClick={() => handleSoundscapeSelect('None')}
                                            >
                                                None
                                            </button>
                                            <button
                                                className={`audio-button ${selectedSoundscape === 'Thunderstorm' ? 'selected' : ''}`}
                                                onClick={() => handleSoundscapeSelect('Thunderstorm')}
                                            >
                                                Thunderstorm
                                            </button>
                                            <button
                                                className={`audio-button ${selectedSoundscape === 'White Noise' ? 'selected' : ''}`}
                                                onClick={() => handleSoundscapeSelect('White Noise')}
                                            >
                                                White Noise
                                            </button>
                                            <button
                                                className={`audio-button ${selectedSoundscape === 'Creek' ? 'selected' : ''}`}
                                                onClick={() => handleSoundscapeSelect('Creek')}
                                            >
                                                Creek
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="volume-settings-header">Volume Settings</div>
                            <table className="volume-settings-table">
                                <tbody>
                                    <tr>
                                        <td className="volume-label">Music Volume</td>
                                        <td id="music-volume">
                                            <input type="range" name="music-volume" min="0" max="100" />
                                        </td>
                                        <td className="mute-button-container">
                                            <button
                                                className={`mute-button ${isMusicMuted ? 'selected' : ''}`}
                                                onClick={() => handleMuteToggle('music')}
                                            >
                                                <span className={isMusicMuted ? 'strikethrough' : ''}>Mute</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="volume-label">Soundscape Volume</td>
                                        <td id="soundscape-volume">
                                            <input type="range" name="soundscape-volume" min="0" max="100" />
                                        </td>
                                        <td className="mute-button-container">
                                            <button
                                                className={`mute-button ${isSoundscapeMuted ? 'selected' : ''}`}
                                                onClick={() => handleMuteToggle('soundscape')}
                                            >
                                                <span className={isSoundscapeMuted ? 'strikethrough' : ''}>Mute</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="volume-label">Master Volume</td>
                                        <td id="master-volume">
                                            <input type="range" name="master-volume" min="0" max="100" />
                                        </td>
                                        <td className="mute-button-container">
                                            <button
                                                className={`mute-button ${isMasterMuted ? 'selected' : ''}`}
                                                onClick={() => handleMuteToggle('master')}
                                            >
                                                <span className={isMasterMuted ? 'strikethrough' : ''}>Mute</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 'other' && (
                        <div className="checkbox-container">
                            <input type="checkbox" id="dimming-volume" />
                            <label htmlFor="dimming-volume">Dimming Volume</label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsOverlay;
