import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Institution Reviews of the Troubled Teen Industry</title>
        <meta name="description" content="Reviews from those that survived the Troubled Teen Industry." />
      </Head>
      
      <Layout>
        {/* Scroll-snap sticky hero */}
        <header className={styles.scrollHero} style={{ '--count': 7 }}>
          <div className={styles.scrollHeroInner}>
            <h1>
              <span className={styles.srOnly}>You were heard.</span>
              <span aria-hidden="true" className={styles.youWere}>you were&nbsp;</span>
            </h1>
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

        {/* CTA panel that slides in after scroll */}
        <main className={styles.heroCta}>
          <section className={styles.heroCtaInner}>
            <p className={`${styles.fluid} ${styles.ctaText}`}>
              your story matters.<br />
              <Link href="/browse" className={styles.ctaLink}>explore programs</Link>
            </p>
          </section>
        </main>

        <div className={styles.pageContent}>
          <section className={styles.about}>
            <div className={styles.aboutContent}>
              <h2>About This Resource</h2>
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

