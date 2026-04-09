import { Link } from 'react-router-dom';
import styles from './styles/AlbumCard.module.css';
import type { AlbumCardProps } from '../../types/album';

export const AlbumCard = ({ id, title, cover_url, release_year }: AlbumCardProps) => {
  
  const albumInitials = title.toUpperCase().split(' ').map(w => w[0]).join('') + ' cover';
  const titleClass = `${styles.albumTitle} ${styles[title.toLowerCase().split(' ').map(w => w[0]).join('')]}`;

  return (
    <div className={styles.albumCard}>
      <Link title={title} to={`/album/${id}`} className={styles.albumInfoCover}>
        <img src={cover_url} alt={albumInitials} className={styles.albumCover} title={release_year ? `${title} (${release_year})` : title}/>
      </Link>
      <div className={styles.albumInfo}>
        {release_year ? 
        <h3 className={titleClass}>{title} <span className={styles.releaseYear}>({release_year})</span></h3>
         : null}
      </div>
    </div>
  );
};