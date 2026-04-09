import { NavBar } from "./NavBar"
import styles from './styles/Header.module.css'
import { useIcon } from "../../hooks/useBiography"

export const Header = () => {
  const { icon, loading } = useIcon()
  return (
    <header className={styles.header}>
        <div className={styles.icon}>
            {loading 
            ? <p>Loading...</p> : icon 
              ? <img src={icon} alt="Billie Eilish Icon" className={styles.iconImage} /> : <p>Icon not found</p>}
        </div>
        <div className={styles.navbar}>
            <NavBar/>
        </div>
    </header>
  )
}