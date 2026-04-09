import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { ButtonNavBarProps } from '../../types/btnNavbar'
import styles from './styles/ButtonNavBar.module.css'


export const ButtonNavBar = ({ isOpen, setIsOpen }: ButtonNavBarProps) => {
  return (
    <>
        <button title="close" className={styles.navButton} type="button" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon className={styles.navIcon} icon={faBars} />
        </button>
    </>
  )
}