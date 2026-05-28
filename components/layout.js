import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <h1>Healing Paths</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/browse">Browse Programs</Link>
          </nav>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <p>&copy; 2024 Healing Paths. A resource for recovery and healing.</p>
      </footer>
    </div>
  )
}
