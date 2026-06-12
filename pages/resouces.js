import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/resources.module.css'

export default function Resources() {
  // Categorized Resource Data Array
  const resourceSections = [
    {
      title: "Data Archives & Tracking Networks",
      subtitle: "Platforms focused on uncovering corporate structures, cross-ownership mapping, and facility directories.",
      items: [
        {
          name: "Kids Over Profits",
          description: "An extensive tracking database and research tool explicitly focused on uncovering asset ownership, corporate structures, and the operational footprint of facilities across the industry.",
          url: "https://kidsoverprofits.org/"
        },
        {
          name: "Unsilenced",
          description: "A comprehensive national archive documenting institutional child abuse, featuring massive state-by-state facility databases, historical litigation tracking, and parent education tools.",
          url: "https://www.unsilenced.org/"
        }
      ]
    },
    {
      title: "Survivor Advocacy & Collective Movements",
      subtitle: "Survivor-led organizations providing community validation, grassroots organizing, and public education campaigns.",
      items: [
        {
          name: "Breaking Code Silence",
          description: "A major survivor-led advocacy movement utilizing localized organizing, legislative advocacy, and personal testimony archives to bring operational transparency to youth programs.",
          url: "https://www.breakingcodesilence.org/"
        },
        {
          name: "ICAPA Network",
          description: "The International Child Abuse Prevention Alliance provides sharp institutional briefs, community support tools, and industry definitions detailing the structural realities of the TTI.",
          url: "https://icapanetwork.org/what-is-the-tti/"
        }
      ]
    },
    {
      title: "Academic Research & Legal Rights",
      subtitle: "Qualitative peer-reviewed studies and legal policy archives documenting the systemic impacts of underregulated youth care.",
      items: [
        {
          name: "UNH Inquiry Journal",
          description: "\"The Troubled Teen Industry and Its Effects: An Oral History\" by C. Jamie Mater. A profound qualitative academic study evaluating the long-term institutional trauma carried by nineteen survivors.",
          url: "https://www.unh.edu/inquiryjournal/blog/2022/04/troubled-teen-industry-its-effects-oral-history"
        },
        {
          name: "National Youth Rights Association",
          description: "An advocacy group analyzing the legal civil liberties of youth, offering vital toolkits regarding involuntary transport laws, institutional rights, and youth autonomy.",
          url: "https://www.youthrights.org/"
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Further Resources | The TTI Index</title>
        <meta name="description" content="Verified organizations, survivor support networks, and investigative archives regarding the Troubled Teen Industry." />
      </Head>

      <Layout>
        <div className={styles.resourcesContainer}>
          <header className={styles.pageHeader}>
            <h1>Further Resources</h1>
            <p>Verified organizations, independent research archives, and advocacy networks dedicated to transparency, systemic safety, and survivor validation.</p>
          </header>

          {/* CRITICAL CALLOUT: IMMEDIATE HELPLINES */}
          <div className={styles.crisisBanner}>
            <strong>Immediate Support Needed?</strong> If you are a survivor or youth in distress, confidential support lines are available 24/7. Text HOME to 741741 to connect with the Crisis Text Line, or call the National Child Abuse Hotline at 1-800-422-4453.
          </div>

          {/* DYNAMICALLY MAP THROUGH YOUR ARCHIVE SECTIONS */}
          {resourceSections.map((section, sIndex) => (
            <section key={sIndex} className={styles.resourceSection}>
              <h2>{section.title}</h2>
              <p className={section.subtitle}>{section.subtitle}</p>
              
              <div className={styles.resourcesGrid}>
                {section.items.map((item, iIndex) => (
                  <div key={iIndex} className={styles.resourceCard}>
                    <div>
                      <h3>{item.name}</h3>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Explore Resource
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}

        </div>
      </Layout>
    </>
  )
}