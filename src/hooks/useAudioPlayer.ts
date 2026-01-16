import { useState, useEffect, useRef } from 'react';
import type { Song } from '../types';

export const useAudioPlayer = () => {
  const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioPlayer.current;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => { setIsPlaying(false); setCurrentTime(0); };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const togglePlayback = (song: Song) => {
    const audio = audioPlayer.current;
    if (playingId === song.id) {
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }    
    } else {
        audio.src = song.audio_url;
        audio.play();
        setPlayingId(song.id);
        setIsPlaying(true);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (playingId) audioPlayer.current.currentTime = time;
  };

  return { playingId, isPlaying, currentTime, togglePlayback, handleSeek };
};