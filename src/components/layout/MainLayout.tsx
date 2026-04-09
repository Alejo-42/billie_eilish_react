import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './styles/MainLayout.module.css'

export const MainLayout = () => {
  return (
    <div className={styles.pageContainer}>
        <Header />
        <main className={styles.content}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}