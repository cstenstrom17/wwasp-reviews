import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Institution Reviews of the Troubled Teen Industry</title>
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

        {/* CTA panel */}
        <main className={styles.heroCta}>
          <section className={styles.heroCtaInner}>
            <p className={styles.ctaText}>your story matters.</p>
            <button
              className={styles.ctaButton}
              onClick={() => router.push('/browse')}
            >
              Explore Programs
            </button>
          </section>
        </main>

        <div className={styles.pageContent}>
          <section className={styles.about}>
            <div className={styles.aboutContent}>
              <h2>What's this about?</h2>
              <p>
                Many people have experienced trauma within institutional settings.
              </p>
              <p>
                Reviews from people who have lived and experienced the institutions affiliated with the Troubled Teen Industry.
              </p>
            </div>
          </section>

          <section className={styles.features}>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <h3>Find Programs</h3>
                <p>Browse verified programs, schools, camps and other institutions affiliated with the Troubled Teen Industry.</p>
              </div>
              <div className={styles.feature}>
                <h3>Share Stories</h3>
                <p>Leave reviews and insights to help others on their healing journey. All contributions are valued and reviewed.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
