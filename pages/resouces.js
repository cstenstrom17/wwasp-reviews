import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/resources.module.css'

export default function Resources() {
  return (
    <>
      <Head>
        <title>Further Resources</title>
        <meta name="description" content="Further resources and reading about the Troubled Teen Industry." />
      </Head>

      <Layout>
        <div className={styles.header}>
          <h1>Resources</h1>
          <p>Further information and resources about the Troubled Teen Industry</p>
        </div>

        <div className={styles.resourcesList}>
          <div className={styles.resource}>
            <h3>Resource Name Here</h3>
            <p className={styles.description}>Brief description of what this resource offers.</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit Website
            </a>
          </div>

          <div className={styles.resource}>
            <h3>Another Resource</h3>
            <p className={styles.description}>Another brief description.</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit Website
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}