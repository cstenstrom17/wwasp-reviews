import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <h1>Reviewing TTI</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/browse">Browse Programs</Link>
            <Link href="/submit">Submit Institution</Link>
            <Link href="/resources">Resources</Link>
          </nav>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
  <p>&copy; 2026 Reviewing the Troubled Teen Industry.</p>
  <p>
    Noticed an error? Let me know{" "}
    <a href="mailto:cstenstrom17@gmail.com" className={styles.footerLink}>
      here.
    </a>
  </p>
</footer>

      
    </div>
  )
}
