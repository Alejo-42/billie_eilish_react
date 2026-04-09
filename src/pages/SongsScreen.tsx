import { useParams } from 'react-router-dom'
import { SongItem } from '../components/layout/SongItem/SongItem'
import { useSongsData } from '../hooks/useSongsData'
import { useAudioPlayer } from '../hooks/useAudioPlayer'
import styles from './styles/SongsScreen.module.css'

export const SongsScreen = () => {
  const { id } = useParams()
  const { album, songs, loading, error } = useSongsData(id);
  
  const { 
    currentTime,
    getSavedTime,
    playingId, 
    isPlaying, 
    duration, 
    togglePlayback, 
    formatTime, 
    handleSeek, 
    getProgress 
  } = useAudioPlayer()
  
  if (loading) return <p>Loading songs...</p>;
  if (error || !album) return <div>Album not found.</div>;
  const cleanTitle = album.title.replace(/[^a-zA-Z0-9\s]/g, '');
  const bgClass = cleanTitle.toLowerCase().split(' ').map(w => w[0]).join('')
  return (
    <>
    <div className={`${styles.container} ${styles[bgClass]}`}>
      <h1 className={`${styles.h1}`}>
        {album?.title}
      </h1>
      {album.description ? <p>{album.description}</p> : null }
      <div className={styles.songList}>
        {songs.map(song => (
          <SongItem 
            key={song.id} 
            song={song} 
            isCurrentPlaying={playingId === song.id} 
            isActuallyPlaying={isPlaying} 
            duration={duration}
            currentPlayTime={currentTime}
            onTogglePlayback={() => togglePlayback(song)} 
            formatTime={formatTime} 
            handleSeek={handleSeek} 
            getProgress={getProgress}
            getSavedTime={getSavedTime}
            bgClass={bgClass}
            />
          ))}
        </div>
      </div>
    </>
  )
}