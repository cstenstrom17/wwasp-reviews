import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          
          {/* Typographic Masthead Group */}
          <div className={styles.masthead}>
            <Link href=\"/\" className={styles.logo}>
              <h1>The TTI Index</h1>
            </Link>
            <span className={styles.tagline}>
              A survivor-led public registry
            </span>
          </div>

          <nav className={styles.nav}>
            <Link href=\"/\">Home</Link>\n            <Link href=\"/browse\">Browse Programs</Link>
            <Link href=\"/submit\">Submit Institution</Link>
            <Link href=\"/resources\">Resources</Link>
          </nav>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 The TTI Index. All rights reserved.</p>
        <p>
          Noticed an error or missing facility? Let me know{" "}
          <a href=\"mailto:cstenstrom17@gmail.com\" className={styles.footerLink}>
            here.
          </a>
        </p>
      </footer>
    </div>
  )
}
