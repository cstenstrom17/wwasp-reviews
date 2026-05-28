import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { supabase } from '../lib/supabase'
import Layout from '../components/layout'
import styles from '../styles/browse.module.css'

export default function Browse() {
  const [schools, setSchools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSchools()
  }, [])

  async function fetchSchools() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('schools')
        .select('id, name, city, state, is_open')
        .eq('is_approved', true)
        .order('name')

      if (error) throw error
      setSchools(data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching schools:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Browse Programs - Healing Paths</title>
        <meta name="description" content="Browse all verified programs and treatment centers." />
      </Head>

      <Layout>
        <div className={styles.header}>
          <h1>Browse Programs</h1>
          <p>Explore verified programs and treatment centers dedicated to healing and recovery.</p>
        </div>

        {error && (
          <div className={styles.error}>
            <p>Unable to load programs. Please try again later.</p>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>
            <p>Loading programs...</p>
          </div>
        ) : schools.length === 0 ? (
          <div className={styles.empty}>
            <p>No programs available yet. Check back soon.</p>
          </div>
        ) : (
          <div className={styles.schoolsList}>
            {schools.map((school) => (
              <Link key={school.id} href={`/schools/${school.id}`}>
                <div className={styles.schoolCard}>
                  <div className={styles.cardContent}>
                    <h3>{school.name}</h3>
                    <p className={styles.location}>
                      {school.city && school.state ? `${school.city}, ${school.state}` : 'Location not specified'}
                    </p>
                    {school.is_open !== null && (
                      <p className={styles.status}>
                        <span className={`${styles.badge} ${school.is_open ? styles.open : styles.closed}`}>
                          {school.is_open ? 'Open' : 'Closed'}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className={styles.arrow}>→</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Layout>
    </>
  )
}
EOF