import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Reviewing the Troubled Teen Industry</title>
        <meta name="description" content="Reviews from those that survived the Troubled Teen Industry." />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        {/* Scroll-snap sticky hero */}
        <header className={styles.scrollHero} style={{ '--count': 7 }}>
          <div className={styles.scrollHeroInner}>
            <h1 className={styles.srOnly}>You were heard.</h1>

            {/* Direct flex child — required for sticky to work */}
            <div className={styles.youWereWrapper} aria-hidden="true">
              <span className={styles.youWere}>you were&nbsp;</span>
            </div>

            <ul aria-hidden="true">
              <li style={{ '--i': 0 }}>believed.</li>
              <li style={{ '--i': 1 }}>heard.</li>
              <li style={{ '--i': 2 }}>brave.</li>
              <li style={{ '--i': 3 }}>not alone.</li>
              <li style={{ '--i': 4 }}>seen.</li>
              <li style={{ '--i': 5 }}>valid.</li>
              <li style={{ '--i': 6 }}>right.</li>
            </ul>
          </div>
        </header>

        {/* FIXED: Changed from <main> to <section> to prevent HTML landmark duplication conflicts */}
        <section className={styles.heroCta}>
          <div className={styles.heroCtaInner}>
            <p className={styles.ctaText}>your story matters.</p>
            <button
              className={styles.ctaButton}
              onClick={() => router.push('/browse')}
            >
              Explore Programs
            </button>
          </div>
        </section>
      </Layout>
    </>
  )
}
