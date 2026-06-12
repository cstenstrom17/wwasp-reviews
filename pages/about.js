import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About | TTI Reviews</title>
        <meta name="description" content="The mission, context, and catalyst behind the public registry." />
      </Head>

      <Layout>
        <article className={styles.aboutContainer}>
          <header className={styles.header}>
            <h1>The Mission </h1>
            <p className={styles.subtitle}>Why this site? Why now?</p>
          </header>

          <section className={styles.contentSection}>
            <h2>The Catalyst</h2>
            <p>
              Traditional public review systems are built for consumer commerce, not institutional accountability. 
              When facilities face public scrutiny, algorithmic spam filters or direct interventions frequently cause 
              platforms to lock, freeze, or entirely disable user reviews on institutional listings.
            </p>
            <p>
              When these review sections are wiped clean, decades of critical historical data and firsthand survivor accounts 
              vanish overnight. This platform was built to solve that problem: an un-freezable, independent registry 
              where testimonies cannot be turned off or moderated away by corporate algorithms. 
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2>The Industry</h2>
            <p>
              The Troubled Teen Industry (TTI) comprises a sprawling network of wilderness therapy programs, boot camps, 
              residential treatment centers, and therapeutic boarding schools. Often operating with minimal state oversight or 
              standardized regulations, an estimated 100,000 to 120,000 youth pass through these facilities every year.
            </p>
            <blockquote>
              "The troubled teen industry (TTI) consists of thousands of underregulated residential youth treatment facilities. These treatment facilities operate on                 a for-profit basis and trace their origins back to the 1958 cult Synanon."
              <cite>— C. Jamie Mater, UNH Inquiry Journal</cite>
            </blockquote>
          </section>

          <section className={styles.contentSection}>
            <h2>One Last Note</h2>
            <p>
              This project isn't abstract for me. Having spent time inside one of these facilities firsthand, 
              I know how isolating the experience is, both during your stay and in the years spent processing it afterward. 
              I was only 14 when I was woken up in the middle of the night being handcuffed by strangers. I left at 16 and that was only when some accrediation were                 surfacing. I spent years blocking it out. When I realized that major search platforms were actively disabling the spaces where survivors could leave                   reviews of their first hand expierences, I started thinking about this site, what I wanted to do, and what I could do. My education was in Computer                    Science but focused on Data Science. So trying to figure out the frontend has been a needed challenge. It's been a lot of fun.
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