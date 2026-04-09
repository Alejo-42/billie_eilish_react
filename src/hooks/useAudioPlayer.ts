import { useState, useEffect, useCallback } from 'react';
import type { Song } from '../types/song';

// --- ESTADO GLOBAL (Fuera del hook para persistencia) ---
const globalAudio = new Audio();
let globalPlayingId: number | null = null;
const globalPlaybackHistory: Record<number, number> = {};

export const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export const useAudioPlayer = () => {
  // Inicializamos los estados con los valores actuales del objeto global
  const [playingId, setPlayingId] = useState<number | null>(globalPlayingId);
  const [isPlaying, setIsPlaying] = useState(!globalAudio.paused);
  const [currentTime, setCurrentTime] = useState(globalAudio.currentTime);
  const [duration, setDuration] = useState(globalAudio.duration || 0);

  useEffect(() => {
    const audio = globalAudio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (globalPlayingId !== null) {
        globalPlaybackHistory[globalPlayingId] = audio.currentTime;
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setPlayingId(globalPlayingId); // Sincroniza el ID visual
    };

    const handlePause = () => setIsPlaying(false);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    
    const handleEnded = () => {
      setIsPlaying(false);
      if (globalPlayingId !== null) globalPlaybackHistory[globalPlayingId] = 0;
    };

    // Listeners
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);


    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayback = (song: Song) => {
    const audio = globalAudio;

    if (globalPlayingId === song.id) {
      if (audio.paused) {
        audio.play().catch(console.error);
      } else {
        audio.pause();
      }
    } else {
      // Detener cualquier canción previa (evita que suenen dos a la vez)
      audio.pause();
      
      globalPlayingId = song.id;
      setPlayingId(song.id);
      
      audio.src = song.audio_url;
      audio.load();
      
      const savedTime = globalPlaybackHistory[song.id] || 0;
      audio.currentTime = savedTime;
      setCurrentTime(savedTime);
      
      audio.play().catch(console.error);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>, songId: number) => {
    const time = Number(e.target.value);
    globalPlaybackHistory[songId] = time;

    if (globalPlayingId === songId) {
      globalAudio.currentTime = time;
    }
    setCurrentTime(time);
  };

  const getSavedTime = useCallback((songId: number) => {
    return globalPlaybackHistory[songId] || 0;
  }, []);

  const getProgress = useCallback((songId: number) => {
    // Si la canción es la que suena globalmente, mostramos el currentTime del estado
    return globalPlayingId === songId ? currentTime : (globalPlaybackHistory[songId] || 0);
  }, [currentTime]);

  return {
    playingId,
    isPlaying,
    currentTime,
    duration,
    togglePlayback,
    handleSeek,
    formatTime,
    getProgress,
    getSavedTime
  };
};