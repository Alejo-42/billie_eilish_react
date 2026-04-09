import { useState } from "react"
import { Link } from "react-router-dom"
import { ButtonNavBar } from "./ButtonNavBar"
import styles from './styles/NavBar.module.css' 

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <ButtonNavBar isOpen={isOpen} setIsOpen={setIsOpen} />  
        <nav className={styles.nav}>
            <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/biography">Biography</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/discography">Discography</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}