import { useEffect, useState } from 'react';
import { supaBase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import './styles/Albums.css'

interface Album {
  id: number;
  title: string;
  cover_url: string; 
  release_year: number;
}

export default function Album() {
    const [albums, setAlbums] = useState<Album[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchAlbums = async () => {
        try {
          setIsLoading(true)
          const { data } = await supaBase.from('albums').select('*').order('id',{ascending:true})
          if (data) setAlbums(data)
          } catch (error) {
          console.error(`Error cargando albumes:`, error);
          }
          finally{
            setIsLoading(false)
          }
        }
        fetchAlbums()
    }, [])
  return (
    <>
      <h1 className='albums-list-title'>Albums</h1>
      {isLoading ? (
      <p className='loading'>Cargando Albumes...</p>
      ) : (
        <ul className='albums-list'>
        {albums && albums.map((album) => (
          <li className='albums-item' key={album.id}>
          <Link to={`/albums/${album.id}`} key={album.id}>
            <img className='albums-poster' src={album.cover_url} alt={`Portada de ${album.title}`} />
          </Link>
            <h3 className={`albums-name ${album.title.toLowerCase().split(' ').map( word => word[0]).join('')}`} >{album.title}</h3>
        </li>
        ))}
      </ul>
      )}
    </>
  )
}