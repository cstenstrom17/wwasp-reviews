import Head from 'next/head'
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
        {/* THIS IS THE CRITICAL WRAPPER BLOCK */}
        <div className={styles.resourcesContainer}>
          
          <div className={styles.header}>
            <h1>Resources</h1>
            <p>Further information and resources about the Troubled Teen Industry</p>
          </div>

          <div className={styles.crisisBanner}>
            <strong>Immediate Support Needed?</strong> If you are a survivor or youth in distress, confidential support lines are available 24/7. Text HOME to 741741 to connect with the Crisis Text Line, or call the National Child Abuse Hotline at 1-800-422-4453.
          </div>

          <div className={styles.resourcesList}>
            <div className={styles.resource}>
              <h3>Kids Over Profits</h3>
              <p className={styles.description}>An extensive tracking database and research tool explicitly focused on uncovering asset ownership, corporate structures, and the operational footprint of facilities across the industry.</p>
              <a href="https://kidsoverprofits.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Explore Resource
              </a>
            </div>

            <div className={styles.resource}>
              <h3>Unsilenced</h3>
              <p className={styles.description}>A comprehensive national archive documenting institutional child abuse, featuring massive state-by-state facility databases, historical litigation tracking, and parent education tools.</p>
              <a href="https://www.unsilenced.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Explore Resource
              </a>
            </div>

            <div className={styles.resource}>
              <h3>Breaking Code Silence</h3>
              <p className={styles.description}>A major survivor-led advocacy movement utilizing localized organizing, legislative advocacy, and personal testimony archives to bring operational transparency to youth programs.</p>
              <a href="https://www.breakingcodesilence.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Explore Resource
              </a>
            </div>

            <div className={styles.resource}>
              <h3>ICAPA Network</h3>
              <p className={styles.description}>The International Child Abuse Prevention Alliance provides sharp institutional briefs, community support tools, and industry definitions detailing the structural realities of the TTI.</p>
              <a href="https://icapanetwork.org/what-is-the-tti/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Explore Resource
              </a>
            </div>

            <div className={styles.resource}>
              <h3>UNH Inquiry Journal</h3>
              <p className={styles.description}>"The Troubled Teen Industry and Its Effects: An Oral History" by C. Jamie Mater. A profound qualitative academic study evaluating the long-term institutional trauma carried by nineteen survivors.</p>
              <a href="https://www.unh.edu/inquiryjournal/blog/2022/04/troubled-teen-industry-its-effects-oral-history" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Explore Resource
              </a>
            </div>
          </div>

        </div> {/* CLOSES RESOURCES CONTAINER */}
      </Layout>
    </>
  )
}