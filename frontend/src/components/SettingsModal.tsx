import React from 'react';
import '../styles/SettingsModal.css';

interface SettingsModalProps {
    onClose: () => void;
    onSetStudyTime: (studyMinutes: number, breakMinutes: number) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onSetStudyTime }) => {
    return (
        <div className="settings-modal-overlay">
            <div className="settings-modal">
                <h2>Settings</h2>
                <button onClick={() => { onSetStudyTime(10, 3); onClose(); }}>Test Session (10/3)</button>
                <button onClick={() => { onSetStudyTime(25, 5); onClose(); }}>25/5 Session</button>
                <button onClick={() => { onSetStudyTime(45, 15); onClose(); }}>45/15 Session</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SettingsModal;
