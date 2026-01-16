import { useState, useEffect } from 'react';
import type { SongDetails, Song } from '../types';
import './styles/SongItem.css'
import { supaBase } from '../lib/supabase';

interface SongItemProps {
  song: Song;
  isCurrent: boolean;
  isPlaying: boolean;
  onToggle: (s: Song) => void;
  currentTime: number;
  onSeek: (time: number) => void;
  onPrepare: (s: Song) => void;
  albumClass: string;
}

export const SongItem = ({ song, isCurrent, isPlaying, onToggle, currentTime, onSeek, onPrepare, albumClass }: SongItemProps) => {
  const [initialDuration, setInitialDuration] = useState<number>(0);
  const [s_yBE, setS_yBE] = useState<SongDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    const fetchSongDetails = async () => {
        const { data, error } = await supaBase.from('songs').select('meaning, spotify_url, youtube_url').eq('title', song.title).single()
        if (error) {
          console.error('Error cargando redes:', error);
        }
        if (data) setS_yBE(data)
      }  
    fetchSongDetails()
  }, [song.title])
  
  useEffect(() => {
    const tempAudio = new Audio(song.audio_url);
    tempAudio.preload = "metadata";
    const handleMetadata = () => {
      if (!isNaN(tempAudio.duration)) setInitialDuration(tempAudio.duration);
    };
    tempAudio.addEventListener('loadedmetadata', handleMetadata);
    return () => tempAudio.removeEventListener('loadedmetadata', handleMetadata);
  }, [song.audio_url]);

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };
  const cleanTitle = song.title.replace(/[^a-zA-Z0-9\s]/g, '');
  const songClass = cleanTitle.toLowerCase().split(' ').map(w => w[0]).join('')
  const dynamicClass = song.release_year ? songClass : albumClass;
  return (
    <>
    <li className={`song-item ${dynamicClass} ${isCurrent ? 'active-play' : ''}`}>
      <div className="song-info-container">
        {song.release_year && (<img className='song-poster' src={song.poster_url} alt={song.title} />)}
        <h3 title={song.title} className="song-title">{song.title}</h3>
        {song.release_year && (<h4 className='song-release-year'>{`(${song.release_year})`}</h4>          )}
      </div>
      <div className="song-progress-container">
        <button className="playback-control" onClick={() => onToggle(song)}>{isCurrent && isPlaying ? '⏸' : '▶'}</button>
        <div className="progress-bar-container">
          <span className="current-time">{isCurrent ? formatTime(currentTime) : "0:00"}</span>
          <input type="range" className="progress-bar" aria-label={`Progreso de la canción ${song.title}`} min="0" max={initialDuration || 100}  value={isCurrent ? currentTime : 0} onInput={() => { if(!isCurrent) onPrepare(song); }} onChange={(e) => onSeek(Number(e.target.value))} />
          <span className="duration-time">{formatTime(initialDuration)}</span>
        </div>
      </div>
      <div className="song-ml-container">
          <div className="song-meaning-container">
            <h4  onClick={() => setIsModalOpen(true)}>Meaning</h4>
          </div>
          <div className="song-listen-container">
            <ul className='list-listen'>
              <li><a target='_blank' rel='noreferrer' title={`${song.title} on Youtube`} href={s_yBE?.youtube_url || '#'}><i className="fa-brands fa-youtube"></i></a></li>
              <li><a target='_blank' rel='noreferrer' title={`${song.title} on Spotify`} href={s_yBE?.spotify_url || '#'}><i className="fa-brands fa-spotify"></i></a></li>
            </ul>
          </div>
      </div>
      { s_yBE?.meaning && isModalOpen && 
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className={`modal-content ${albumClass}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            <h3 className="modal-title">{song.title}</h3>
            <div className="meaning-body">
              <h4 className='meaning-title'>Meaning:</h4>
              <p className="meaning-text">{s_yBE.meaning}</p>
            </div>
          </div>
        </div>
      }
      </li>
    </>
  );
};