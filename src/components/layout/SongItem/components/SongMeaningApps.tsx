import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MeaningModal } from '../../../layout/MeaningModal'; 
import styles from './styles/SongMeaningApps.module.css';
import type { Song } from '../../../../types/song';

interface SongMeaningAppsProps {
  song: Song;
  bgClass: string;
}

export const SongMeaningApps = ({ song, bgClass }: SongMeaningAppsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.songMeaningApps}>
      <div className={styles.meaning}>
        <h3 onClick={() => setIsModalOpen(true)}>Meaning</h3>
        
        <MeaningModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={song.title}
          meaning={song.meaning}
          bgClass={bgClass}
        />
      </div>

      <ul className={styles.apps}>
        {song.spotify_url ? (
          <li>
            <a 
              title={`Listening ${song.title} on Spotify`} 
              href={song.spotify_url} 
              target='_blank' 
              rel="noreferrer"
            >
              <FontAwesomeIcon className={styles.appIcon} icon={faSpotify} />
            </a>
          </li>
        ) : (
          <li>
            <p className={styles.noLink}>No Spotify link available.</p>
          </li>
        )}
        {song.youtube_url ? (
          <li>
            <a 
              title={`Listening ${song.title} on YouTube`} 
              href={song.youtube_url} 
              target='_blank' 
              rel="noreferrer"
            >
              <FontAwesomeIcon className={styles.appIcon} icon={faYoutube} />
            </a>
          </li>
        ) : (
          <li>
            <p className={styles.noLink}>No YouTube link available.</p>
          </li>
        )}
      </ul>
    </div>
  );
};