import { useState } from 'react'
import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          
          <Link href="/" className={styles.logo}>
            <h1>Reviewing TTI</h1>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            
            {/* DROPDOWN TRIGGER GROUP */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className={styles.dropdownToggle}
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Explore Archive
                <span className={`${styles.arrow} ${dropdownOpen ? styles.arrowOpen : ''}`}>
                  ▼
                </span>
              </button>

              {dropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href="/browse" onClick={() => setDropdownOpen(false)}>
                      Browse Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/submit" onClick={() => setDropdownOpen(false)}>
                      Submit a Facility
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" onClick={() => setDropdownOpen(false)}>
                      Further Resources
                    </Link>
                  </li>
                </ul>
              )}
            </div>

          </nav>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Reviewing the Troubled Teen Industry. All rights reserved.</p>
        <p>
          Noticed an error or missing facility? Let me know{" "}
          <a href="mailto:cstenstrom17@gmail.com" className={styles.footerLink}>
            here.
          </a>
        </p>
      </footer>
    </div>
  )
}