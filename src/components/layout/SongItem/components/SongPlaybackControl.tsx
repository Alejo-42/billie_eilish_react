import type { SongControlProps } from '../../../../types/songItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/SongPlaybackControl.module.css';


export const SongPlaybackControl = ({ isPlaying, onToggle }: SongControlProps) => {
  return (
        <div className={styles.control}>
          <button 
            title={isPlaying ? 'Pausar' : 'Reproducir'} 
            onClick={onToggle} 
            className={`${styles.playbackControl} ${isPlaying ? styles.btnPause : styles.btnPlay}`}
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
          </button>
        </div>
    )
}