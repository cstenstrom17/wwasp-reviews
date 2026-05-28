import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Institution Reviews of the Troubled Teen Industry</title>
        <meta name="description" content="Reviews from those that survived the Troubled Teen's Industry." />
      </Head>
      
      <Layout>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Reviews of the Troubled Teen Industry</h1>
            <p className={styles.subtitle}>Reviews from those that survivied them.</p>
            <Link href="/browse" className={styles.cta}>
              Explore Programs
            </Link>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <h2>About This Resource</h2>
            <p>
              Many people have experienced trauma within institutional settings.
            </p>
            <p>
              Reviews from people who have lived and experienced the instiutions affiliated with the Troubled Teen Industry. 
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
      </Layout>
    </>
  )
}
