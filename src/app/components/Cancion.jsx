"use client";

import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false); // New state for minimizing
  const audioRef = React.useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeekChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed top-20 right-4 z-20 text-white bg-gray-800 opacity-90 shadow-lg rounded-lg p-4 flex flex-col items-center w-64">
      <h2>Escucha nuestra canción</h2>

      <div className="w-full flex items-center justify-between text-xs mb-2">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeekChange}
          className="w-full mx-2"
        />
        <span>{formatTime(duration - currentTime)}</span>
      </div>

      <button
        className="text-2xl"
        onClick={togglePlay}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      <button
        className="text-xs mt-2"
        onClick={() => setIsMinimized(!isMinimized)} // Toggle minimize
      >
        {isMinimized ? 'Mostrar controles' : 'Ocultar controles'}
      </button>

      {!isMinimized && ( // Conditional rendering for volume control
        <div className="flex items-center w-full mt-2">
          <span className="text-xs">🔊</span>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full ml-2"
          />
        </div>
      )}

      <audio ref={audioRef} src={audioSrc} preload="auto" />
    </div>
  );
};

export default AudioPlayer;
