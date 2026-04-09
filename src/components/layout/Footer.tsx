import { SocialList } from './SocialList';
import { useSocialMedia } from "../../hooks/useSocialMedia";
import styles from './styles/Footer.module.css'

export const Footer = () => {

  const { socialLinks, loading } = useSocialMedia();

  return (
    <>
      <footer>
        <h3>My Social Media</h3>
          {loading ? (
            <p className={styles.loadingText}>Loading social links...</p>
            ) : socialLinks ? (
              <SocialList data={socialLinks} loading={loading} />
            ) : (
            <p className={styles.noLinks}>No social media links available.</p>
          )}
        <p className={styles.copyright}>&copy; 2026 Billie Eilish. All copyrights reserved.</p>
      </footer>
    </>
  )
}