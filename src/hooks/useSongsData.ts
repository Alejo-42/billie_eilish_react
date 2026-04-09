import { useState, useEffect } from 'react';
import { getAlbumById } from '../services/albumsService';
import { getSongsByAlbumId } from '../services/songService';
import type { Album } from '../types/album';
import type { Song } from '../types/song';

export const useSongsData = (id: string | undefined) => {
  const [album, setAlbum] = useState<Album | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllData = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const albumId = parseInt(id)

        const albumData = await getAlbumById(albumId)
        setAlbum(albumData)

        const isSingle = albumData?.release_year === null

        const songsData = await getSongsByAlbumId(albumId, isSingle)
        setSongs(songsData)
      } catch (err) {
        setError(`Hubo un error: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    loadAllData();
  }, [id]);

  return { album, songs, loading, error };
};