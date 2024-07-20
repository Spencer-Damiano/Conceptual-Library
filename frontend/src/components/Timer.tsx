import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';
import SettingsOverlay from './SettingsOverlay';

interface TimerProps {
    onStateChange: (isStudying: boolean) => void;
    onSettingsToggle: () => void;
    isSettingsOpen: boolean;
}

const studySessions = [
    { study: 5 * 1000, break: 3 * 1000, label: 'Test (5s study / 3s break)' },
    { study: 25 * 60 * 1000, break: 5 * 60 * 1000, label: 'Pomodoro (25m study / 5m break)' },
    { study: 45 * 60 * 1000, break: 15 * 60 * 1000, label: 'Long (45m study / 15m break)' },
];

const Timer: React.FC<TimerProps> = ({ onStateChange, onSettingsToggle, isSettingsOpen }) => {
    const [selectedSession, setSelectedSession] = useState(studySessions[0]);
    const [timeLeft, setTimeLeft] = useState(selectedSession.study);
    const [isStudying, setIsStudying] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 100);
                setTimeLeft((prevTime) => prevTime - 100);
            }, 100);
        } else if (timeLeft <= 0) {
            setIsStudying((prev) => !prev);
            setElapsedTime(0);
            setTimeLeft(isStudying ? selectedSession.break : selectedSession.study);
            onStateChange(!isStudying);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, isStudying, selectedSession, onStateChange]);

    const startTimer = () => setIsActive(true);
    const pauseTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setIsStudying(true);
        setElapsedTime(0);
        setTimeLeft(selectedSession.study);
        onStateChange(true);
    };

    const handleApplyTimerSettings = (session: { study: number; break: number; label: string }) => {
        if (elapsedTime < session.study) {
            setTimeLeft(session.study - elapsedTime);
            setIsStudying(true);
        } else {
            setTimeLeft(session.break);
            setIsStudying(false);
        }
        setSelectedSession(session);
        onSettingsToggle(); // Close the settings overlay
        setIsActive(true); // Automatically resume the timer
    };

    const totalDuration = isStudying ? selectedSession.study : selectedSession.break;
    const progressPercentage = ((totalDuration - timeLeft) / totalDuration) * 100;

    return (
        <div className={`timer-container ${isStudying ? 'study' : 'break'}`}>
            <h1>{isStudying ? 'Study Session' : 'Break Session'}</h1>
            <div className="progress-bar">
                <div
                    className={`progress ${isStudying ? 'study' : 'break'}`}
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <div className="timer">
                {Math.floor(timeLeft / 60000)
                    .toString()
                    .padStart(2, '0')}
                :
                {Math.floor((timeLeft % 60000) / 1000)
                    .toString()
                    .padStart(2, '0')}
            </div>
            <div className="timer-buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={onSettingsToggle}>Settings</button>
            </div>
            {isSettingsOpen && (
                <SettingsOverlay
                    onClose={onSettingsToggle}
                    onApplyTimerSettings={handleApplyTimerSettings}
                />
            )}
        </div>
    );
};

export default Timer;
