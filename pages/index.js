import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Healing Paths - Recovery Resources</title>
        <meta name="description" content="A resource for healing and recovery from institutional trauma." />
      </Head>
      
      <Layout>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Healing Paths</h1>
            <p className={styles.subtitle}>A space for recovery, healing, and shared stories from those seeking to move forward.</p>
            <Link href="/browse" className={styles.cta}>
              Explore Programs
            </Link>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <h2>About This Resource</h2>
            <p>
              Many people have experienced trauma within institutional settings. This site serves as a directory and community space for those seeking programs, resources, and support in their healing journey.
            </p>
            <p>
              Here you can discover programs and treatment centers, read authentic experiences from others, and contribute your own story to help others find their path forward.
            </p>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Find Programs</h3>
              <p>Browse verified programs and treatment centers dedicated to healing and recovery.</p>
            </div>
            <div className={styles.feature}>
              <h3>Share Stories</h3>
              <p>Leave reviews and insights to help others on their healing journey. All contributions are valued and reviewed.</p>
            </div>
            <div className={styles.feature}>
              <h3>Community Support</h3>
              <p>Connect through shared experiences and find strength in knowing you're not alone.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
