import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { supabase } from '../../lib/supabase'
import Layout from '../../components/layout'
import styles from '../../styles/school-detail.module.css'

export default function SchoolDetail() {
  const router = useRouter()
  const { id } = router.query
  
  const [school, setSchool] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [checkedLegal, setCheckedLegal] = useState(false) // Legal state tracker
  
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    text: ''
  })

  useEffect(() => {
    if (!id) return
    fetchData()
  }, [id])

  async function fetchData() {
    try {
      setLoading(true)
      
      const { data: schoolData, error: schoolError } = await supabase
        .from('schools')
        .select('*')
        .eq('id', id)
        .single()

      if (schoolError) throw schoolError

      setSchool(schoolData)

      const { data: reviewsData, error: reviewsError } = await supabase
        .from('reviews')
        .select('*')
        .eq('school_id', id)
        .eq('is_approved', true)
        .order('created_at', { ascending: false })

      if (reviewsError) throw reviewsError
      setReviews(reviewsData || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmitReview(e) {
    e.preventDefault()
    
    if (!id) {
      alert('Application context missing. Please refresh and try again.')
      return
    }

    if (!checkedLegal) {
      alert('You must certify the legal attestation statement to submit a review.')
      return
    }

    if (!formData.text.trim()) {
      alert('Please write a review')
      return
    }

    try {
      setSubmitting(true)
      
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            school_id: isNaN(id) ? id : parseInt(id), // Dynamically handles integers or UUID string keys safely
            author: formData.author.trim() || 'Anonymous',
            rating: parseInt(formData.rating),
            text: formData.text.trim(),
            is_approved: false
          }
        ])

      if (error) throw error

      setFormData({ author: '', rating: 5, text: '' })
      setCheckedLegal(false) // Reset checkbox state
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 6000)
    } catch (err) {
      alert('Error submitting review: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className={styles.loading}>Loading program...</div>
      </Layout>
    )
  }

  if (error || !school) {
    return (
      <Layout>
        <div className={styles.error}>
          <h2>Program not found</h2>
          <p>This program could not be found. Please check the URL or return to browse all programs.</p>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{school.name} - Reviews</title>
        <meta name="description" content={`Information and reviews for ${school.name}`} />
      </Head>

      <Layout>
        <div className={styles.detail}>
          <section className={styles.schoolInfo}>
            <h1>{school.name}</h1>
            
            <div className={styles.meta}>
              {school.address && <p><strong>Address:</strong> {school.address}</p>}
              {school.city && school.state && (
                <p><strong>Location:</strong> {school.city}, {school.state} {school.zip || ''}</p>
              )}
              {school.is_open !== null && (
                <p>
                  <strong>Status:</strong>
                  <span className={`${styles.status} ${school.is_open ? styles.open : styles.closed}`}>
                    {school.is_open ? 'Open' : 'Closed'}
                  </span>
                </p>
              )}
            </div>
          </section>

          <section className={styles.reviewsSection}>
            <h2>Reviews & Experiences</h2>
            
            {reviews.length === 0 ? (
              <p className={styles.noReviews}>No reviews yet. Be the first to share your experience.</p>
            ) : (
              <div className={styles.reviewsList}>
                {reviews.map((review) => (
                  <div key={review.id} className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      <div>
                        <p className={styles.author}>{review.author}</p>
                        <p className={styles.date}>
                          {new Date(review.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className={styles.rating}>
                        <span className={styles.stars}>
                          {'★'.repeat(review.rating)}
                        </span>
                        <span className={styles.ratingNum}>{review.rating}/5</span>
                      </div>
                    </div>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className={styles.formSection}>
            <h2>Share Your Experience</h2>
            <p className={styles.formNote}>
              To protect the integrity of this archive, all entries are reviewed to prevent spam before going public. Accounts are never edited or altered.
            </p>

            {submitSuccess && (
              <div className={styles.success}>
                <p>Thank you for your submission. Your account has been received and will appear below once approved by the curator.</p>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="author">Name / Pseudonym</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Optional — Leave blank to remain completely anonymous"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                >
                  <option value={1}>1 - Poor</option>
                  <option value={2}>2 - Fair</option>
                  <option value={3}>3 - Good</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={5}>5 - Excellent</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="text">Your Account</label>
                <textarea
                  id="text"
                  rows={6}
                  placeholder="To best help searching families, please provide a factual, structural account of your stay. Consider describing details like daily routines, facility conditions, or standard operating metrics during your time there..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  required
                />
              </div>

              {/* SECTION 230 LEGAL IMMUNITY ATTESTATION CHECKBOX */}
              <div className={styles.legalGroup}>
                <input
                  id="legalAttestation"
                  type="checkbox"
                  checked={checkedLegal}
                  onChange={(e) => setCheckedLegal(e.target.checked)}
                  required
                />
                <label htmlFor="legalAttestation">
                  I certify that this submission is a truthful, accurate representation of my firsthand experiences at this facility. I acknowledge that I am solely responsible for the context of this testimony under applicable law.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting || !checkedLegal}
                className={styles.submitBtn}
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </section>
        </div>
      </Layout>
    </>
  )
}