import { AlbumSect } from '../components/layout/AlbumSect'
import { useDiscography } from '../hooks/useDiscography'
import styles from './styles/DiscographyScreen.module.css'

export const DiscographyScreen = () => {
  const { albumsData, loading } = useDiscography()
  const albums =  albumsData?.filter(album => album.release_year !== null) || []
  const eps_singles =  albumsData?.filter(album => album.release_year === null) || []
  
  if (loading) return <p className={styles.loading}>Loading discography...</p>

  return (
    <>
      <h1 className={styles.h1}>Discography of Billie Eilish</h1>
      <p className={styles.p}>Her discography includes several studio albums and singles.</p>
      <p className={styles.p}>Checkout her latest releases!</p>

      <AlbumSect title="Studio Albums" data={albums} />
      <AlbumSect title="EPs & Singles" data={eps_singles} />
    </>
  )
}