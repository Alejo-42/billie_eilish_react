import type { SongInfoProps } from '../../../../types/songItem';
import styles from './styles/SongInfo.module.css';

export const SongInfo = ({ song }: SongInfoProps) => {

  return (
    <div className={styles.songInfo}>
          {
            song.cover_url && 
            <div className={styles.coverSect}>
              <img className={styles.cover} src={song.cover_url} alt={`${song.title} cover`} />
            </div>
          }
        <h3 title={song.release_year ? `${song.title} (${song.release_year})` : song.title} className={styles.songTitle}>
          {song.title}
        </h3>
          {song.release_year && <span className={styles.releaseYear}> ({song.release_year})</span>}
        <p>{song.song_artists.map(sa => sa.artists.name).join(', ')}</p>
      </div>
  );
};