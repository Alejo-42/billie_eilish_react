import { BioSection } from '../components/layout/BioSect';
import { SocialList } from '../components/layout/SocialList';
import { useBiography } from '../hooks/useBiography';
import { useArtistSocialMedia } from '../hooks/useSocialMedia';
import styles from './styles/BiographyScreen.module.css'

export const BiographyScreen = () => {

  const { bioData, loading } = useBiography();
  const { socialArtistLinks, loading: socialLoading } =  useArtistSocialMedia();

  if (loading) return <p className={styles.loading}>Loading biography...</p>
  if (socialLoading) return <p className={styles.loading}>Loading social media links...</p>;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Biography of Billie Eilish</h1>
        {bioData ? bioData.map((item, index) => (
        <BioSection key={item.id} id={item.id} content={item.content} photo_name={item.photo_name} index={index}/>
        )) : <p>Sorry. Something went wrong :(</p> }
        <div className={styles.socialMedia}>
          <h2>Her Social Media</h2>
          <p>Follow her on social media for the latest updates!</p>
          {socialLoading ? (
            <p className={styles.loading}>Loading social media links...</p>
          ) : socialArtistLinks ? (
            <SocialList data={socialArtistLinks} loading={socialLoading} />
          ) : (
            <p className={styles.noLinks}>No social media links available.</p>
          )}
        </div>
      </div>
    </>
  )
}