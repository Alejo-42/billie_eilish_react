import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supaBase } from '../lib/supabase';
import { SongItem } from './SongItem';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import type { Song, Album } from '../types';
import './styles/AlbumDetail.css'


export default function AlbumDetail() {
  const { id } = useParams();
  const [songs, setSongs] = useState<Song[]>([]);
  const [album, setAlbum] = useState<Album | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  const { playingId, isPlaying, currentTime, togglePlayback, handleSeek } = useAudioPlayer();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const { data: albumData } = await supaBase.from('albums').select('*').eq('id', id).single();
        const orderBy = albumData?.title === 'Another Songs' ? 'release_year' : 'id';
        const isAscending = orderBy === 'id'
        const { data: songsData } = await supaBase.from('songs').select('*').eq('album_id', id).order(orderBy, { ascending: isAscending });
        if (albumData) setAlbum(albumData);
        if (songsData) setSongs(songsData);
      } catch (error) {
        console.error('Error cargando canciones',error);
      } finally{
        setIsLoading(false)
      }
    };
    fetchData();
  }, [id]);

  const bgClass = album ? album.title.toLowerCase().split(' ').map(w => w[0]).join('') : '';
  
  return (
      <div className={`album-container ${bgClass}`}>
        {isLoading ? (
          <p className='loading'>Cargando...</p>
          ) : (
          <>
          {album && <h1 className='album-title'>{album.title}</h1>}
            <ul className="songs-list">
              {songs.map((song) => (
                <SongItem albumClass={bgClass} key={song.id} song={song} isCurrent={playingId === song.id} isPlaying={isPlaying} onToggle={togglePlayback} currentTime={playingId === song.id ? currentTime : 0} onSeek={handleSeek}onPrepare={() => {}} />
              ))}
            </ul>
          </>
        )}
      <Link to="/albums" className="back-link">← Volver</Link>
      </div>
  );
}