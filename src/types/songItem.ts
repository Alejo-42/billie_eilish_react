import type { Song } from "./song";

export interface SongItemProps {
  song: Song;
  isCurrentPlaying: boolean;  
  isActuallyPlaying: boolean;   
  currentPlayTime: number;
  duration: number;
  onTogglePlayback: () => void;
  formatTime: (s: number) => string;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  getSavedTime: (id: number) => number;
  getProgress: (id: number) => number;
  bgClass: string; 
}

export interface SongInfoProps {
  song: Song;
}
export interface SongControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}
export interface SongProgressProps {
  songId: number;
  songTitle: string;
  currentProgress: number;
  duration: number;
  dbDuration: number;
  isCurrentPlaying: boolean;
  formatTime: (seconds: number) => string;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
} 