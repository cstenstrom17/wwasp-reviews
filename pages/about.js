import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About | The TTI Index</title>
        <meta name="description" content="The mission, context, and catalyst behind the public registry." />
      </Head>

      <Layout>
        <article className={styles.aboutContainer}>
          <header className={styles.header}>
            <h1>The Mission Behind the Registry</h1>
            <p className={styles.subtitle}>Why an independent public archive is required for institutional accountability.</p>
          </header>

          <section className={styles.contentSection}>
            <h2>The Catalyst</h2>
            <p>
              Traditional public review systems are built for consumer commerce, not institutional accountability. 
              When facilities face public scrutiny, algorithmic spam filters or direct interventions frequently cause 
              platforms like Google to lock, freeze, or entirely disable user reviews on institutional listings.
            </p>
            <p>
              When these review sections are wiped clean, decades of critical historical data and firsthand survivor accounts 
              vanish overnight. This platform was built to solve that problem: an un-freezable, independent registry 
              where testimonies cannot be turned off or moderated away by corporate algorithms.
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2>The Industry Overview</h2>
            <p>
              The Troubled Teen Industry (TTI) comprises a sprawling network of wilderness therapy programs, boot camps, 
              residential treatment centers, and therapeutic boarding schools. Often operating with minimal state oversight or 
              standardized regulations, an estimated 100,000 to 120,000 youth pass through these facilities every year.
            </p>
            <blockquote>
              "Far too many children and adolescents have experienced profound systemic trauma within settings 
              marketed to families as therapeutic environments."
              <cite>— University of New Hampshire Inquiry Journal</cite>
            </blockquote>
          </section>

          <section className={styles.contentSection}>
            <h2>A Note from the Curator</h2>
            <p>
              This project isn't abstract for me. Having spent time inside one of these facilities firsthand, 
              I know how isolating the experience is, both during your stay and in the years spent processing it afterward. 
              When I realized that major search platforms were actively disabling the spaces where survivors could leave warning signs 
              for other families, building this archive became a necessity.
            </p>
            <p>
              You were not alone then, and you are not alone now. Your stories are permanent, visible, and vital.
            </p>
          </section>
        </article>
      </Layout>
    </>
  )
}