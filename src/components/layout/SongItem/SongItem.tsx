import styles from './SongItem.module.css'
import { SongInfo } from './components/SongInfo'
import type { SongItemProps } from '../../../types/songItem'
import { SongPlaybackControl } from './components/SongPlaybackControl'
import { SongProgress } from './components/SongProgress'
import { SongMeaningApps } from './components/SongMeaningApps'

export const SongItem = ({
  song,
  isCurrentPlaying,
  isActuallyPlaying,
  currentPlayTime,
  duration,
  onTogglePlayback,
  formatTime,
  handleSeek,
  getSavedTime,
  bgClass
}: SongItemProps) => {

  const showPause = isCurrentPlaying && isActuallyPlaying;

  const cleanTitle = song.title.replace(/[^a-zA-Z0-9\s]/g, '');
  const songBg = cleanTitle.toLowerCase().split(' ').map(w => w[0]).join('')
  const currentProgress = isCurrentPlaying ? currentPlayTime : getSavedTime(song.id);

  return (
    <div className={`${styles.songItem} ${song.release_year ? styles[songBg] : ''} ${isCurrentPlaying ? styles.active : ''} ${styles[bgClass]}`}>
      <SongInfo song={song} />

      <div className={styles.songInter}>
        <SongPlaybackControl isPlaying={showPause} onToggle={onTogglePlayback} />

        <SongProgress 
          songId={song.id}
          songTitle={song.title}
          currentProgress={currentProgress}
          duration={duration}
          dbDuration={song.duration_seconds || 0}
          isCurrentPlaying={isCurrentPlaying}
          formatTime={formatTime}
          onSeek={handleSeek}/>

        <SongMeaningApps song={song} bgClass={bgClass || ""} />
      </div>
    </div>
  )
}