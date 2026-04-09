import { getIcon } from "../../utils/iconHelper";
import { SocialLinkItem } from "./SocialLinkItem";
import type { SocialListProps } from "../../types/socials";
import styles from './styles/SocialList.module.css'

export const SocialList = ({ data, loading }: SocialListProps) => {
  if (loading) return <p className={styles.loading}>Loading social media links...</p>;
  
  if (!data || data.length === 0) return <p className={styles.noLinks}>No social media links available.</p>;

  return (
    <ul className={styles.socialLinksList}>
      {data.map((social) => {
        const icon = getIcon(social.icon_class);
        const branchColor = social.icon_class.split(' ').pop() || '';

        return icon ? (
          <SocialLinkItem 
            key={social.id}
            link={social.link}
            name={social.name}
            icon={icon}
            branchColor={branchColor} />
        ) : 
          <li key={social.id} className={styles.noIcon}>
            <p className={styles.noLinks}>No social media links available.</p>;
          </li>
      })}
    </ul>
  );
};