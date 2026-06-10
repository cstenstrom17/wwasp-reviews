import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

const WORDS = ['believed.', 'heard.', 'brave.', 'not alone.', 'seen.', 'valid.', 'right.']
const WORD_DURATION = 1400  // ms per word
const MERGE_DELAY = 600     // pause after last word before merge
const CTA_DELAY = 800       // pause after merge before CTA fades in

export default function Home() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [phase, setPhase] = useState('animating') // 'animating' | 'merging' | 'cta'

  useEffect(() => {
    let timeouts = []

    // Cycle through each word
    WORDS.forEach((_, i) => {
      const t = setTimeout(() => {
        setActiveIndex(i)
      }, i * WORD_DURATION)
      timeouts.push(t)
    })

    // After last word, trigger merge
    const mergeT = setTimeout(() => {
      setPhase('merging')
    }, WORDS.length * WORD_DURATION + MERGE_DELAY)
    timeouts.push(mergeT)

    // After merge transition, show CTA
    const ctaT = setTimeout(() => {
      setPhase('cta')
    }, WORDS.length * WORD_DURATION + MERGE_DELAY + CTA_DELAY)
    timeouts.push(ctaT)

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <>
      <Head>
        <title>Reviews of the Troubled Teen Industry</title>
        <meta name="description" content="Reviews from those that survived the Troubled Teen Industry." />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        {/* Hero — occupies full viewport, switches phase via data attribute */}
        <div
          className={styles.heroWrap}
          data-phase={phase}
          aria-hidden={phase === 'cta' ? 'true' : undefined}
        >
          {/* Split background layers */}
          <div className={styles.splitLeft} />
          <div className={styles.splitRight} />
          {/* Grain overlay */}
          <div className={styles.grain} />

          {/* Word animation — hidden once CTA is showing */}
          <div className={`${styles.wordStage} ${phase !== 'animating' ? styles.wordStageHidden : ''}`}>
            <h1 className={styles.srOnly}>You were heard.</h1>
            <div className={styles.wordRow} aria-hidden="true">
              <span className={styles.youWere}>you were&nbsp;</span>
              <span className={styles.activeWord}>
                {WORDS[activeIndex]}
              </span>
            </div>
          </div>

          {/* CTA — fades in after merge */}
          <div className={`${styles.ctaStage} ${phase === 'cta' ? styles.ctaStageVisible : ''}`}>
            <p className={styles.ctaText}>your story matters.</p>
            <button
              className={styles.ctaButton}
              onClick={() => router.push('/browse')}
            >
              Explore Programs
            </button>
          </div>
        </div>

        {/* Rest of page */}
        <div className={styles.pageContent}>
          <section className={styles.about}>
            <div className={styles.aboutContent}>
              <h2>What's this about?</h2>
              <p>
                Far too many children and adolescents have experienced trauma within institutional settings.
                The Troubled Teen Industry is made up of wilderness therapy programs, boot camps, residential
                treatment centers, and therapeutic boarding schools. Often unregulated, an estimated 100,000
                to 120,000 are in these facilities every year.
              </p>
              <p className={styles.source}>
                Source:{' '}
                <a
                  href="https://www.unh.edu/inquiryjournal/blog/2022/04/troubled-teen-industry-its-effects-oral-history"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of New Hampshire Inquiry Journal
                </a>
              </p>
            </div>
          </section>

          <section className={styles.features}>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <h3>Find Programs</h3>
                <p>Browse programs, schools, camps and other institutions affiliated with the Troubled Teen Industry.</p>
              </div>
              <div className={styles.feature}>
                <h3>Share Stories</h3>
                <p>Leave reviews and share your story.</p>
              </div>
              <div className={styles.feature}>
                <h3>Learn & Connect</h3>
                <p>Read first hand experiences and learn from those that lived through it.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

