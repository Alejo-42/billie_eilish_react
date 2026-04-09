import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { SocialLinkItemProps } from "../../types/socials"
import styles from './styles/SocialLinkItem.module.css'

export const SocialLinkItem = ({link, name, icon, branchColor}: SocialLinkItemProps) => {
  return (
    <>
        <li className={styles.socialLinkItem}>
            <a 
            className={`${styles.socialLink} ${styles[branchColor]}`} 
            title={name} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" />
            </a>
        </li>
    </>
  )
}   