'use client';

import { useState, useEffect, useRef } from 'react';

interface TimerProps {
  id: string;
}

export default function Timer({ id }: TimerProps) {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (ms: number) => {
    const total = Math.floor(ms / 100);
    const tenths = total % 10;
    const secs = Math.floor(total / 10) % 60;
    const mins = Math.floor(total / 600);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${tenths}`;
  };

  const handleStart = () => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      const startTime = Date.now() - elapsed;
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 100);
      setIsRunning(true);
    }
  };

  const handleLap = () => {
    if (!isRunning && elapsed === 0) return;
    setLaps(prev => [elapsed, ...prev]);
  };

  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setElapsed(0);
    setIsRunning(false);
    setLaps([]);
  };

  return (
    <div className="timer-widget">
      <div>
        <div className={`timer-display ${isRunning ? 'running' : elapsed > 0 ? 'stopped' : ''}`}>
          {formatTime(elapsed)}
        </div>
      </div>
      <div className="timer-controls">
        <button className="timer-btn timer-start" onClick={handleStart}>
          {isRunning ? '⏸ Pausar' : '▶ Iniciar'}
        </button>
        <button className="timer-btn timer-stop" onClick={handleLap}>
          ⊕ Lap
        </button>
        <button className="timer-btn timer-reset" onClick={handleReset}>
          ↺ Resetar
        </button>
      </div>
      <div className="timer-laps">
        <div className="timer-lap-title">Laps registrados</div>
        <div className="lap-list">
          {laps.map((lap, i) => (
            <div key={i} className="lap-item">
              <span className="lap-label">Lap {laps.length - i}</span>
              <span>{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
