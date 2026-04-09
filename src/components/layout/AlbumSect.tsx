import { AlbumCard } from "./AlbumCard"
import type { AlbumSectProps } from "../../types/album"
import styles from './styles/AlbumSect.module.css'

export const AlbumSect = ({ title, data }: AlbumSectProps) => {
  return (
    <>
        <h2 className={styles.h2}>{title}</h2>
        {data ? data.map((album) => (
            <AlbumCard 
            key={album.id} 
            id={album.id} 
            title={album.title} 
            cover_url={album.cover_url} 
            release_year={album.release_year} />
        )) : <p>Sorry. Something went wrong :(</p>}
    </>
  )
}