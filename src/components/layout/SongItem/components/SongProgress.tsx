import styles from './styles/SongProgress.module.css';
import type { SongProgressProps } from '../../../../types/songItem';

export const SongProgress = ({
  songId,
  songTitle,
  currentProgress,
  duration,
  dbDuration,
  isCurrentPlaying,
  formatTime,
  onSeek
}: SongProgressProps) => {
  return (
    <div className={styles.songProgress}>
      <span className={styles.currentTime}>
        {formatTime(currentProgress)}
      </span>

      <input
        type="range"
        min="0"
        title={`Seek ${songTitle}`}
        className={styles.seekBar}
        max={isCurrentPlaying && duration > 0 ? duration : (dbDuration || 100)}
        value={currentProgress}
        onChange={(e) => onSeek(e, songId)}
      />

      <span className={styles.durationTime}>
        {formatTime(isCurrentPlaying && duration > 0 ? duration : (dbDuration || 0))}
      </span>
    </div>
  );
};