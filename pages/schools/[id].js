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
            school_id: parseInt(id),
            author: formData.author || 'Anonymous',
            rating: parseInt(formData.rating),
            text: formData.text,
            is_approved: false
          }
        ])

      if (error) throw error

      setFormData({ author: '', rating: 5, text: '' })
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
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
        <title>{school.name} - Healing Paths</title>
        <meta name="description" content={`Information and reviews for ${school.name}`} />
      </Head>

      <Layout>
        <div className={styles.detail}>
          <section className={styles.schoolInfo}>
            <h1>{school.name}</h1>
            
            <div className={styles.meta}>
              {school.address && <p><strong>Address:</strong> {school.address}</p>}
              {school.city && school.state && (
                <p><strong>Location:</strong> {school.city}, {school.state} {school.zip}</p>
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
              Your review will be reviewed before posting. All submissions are valued and help others on their healing journey.
            </p>

            {submitSuccess && (
              <div className={styles.success}>
                <p>Thank you for sharing your experience. Your review will appear once it's been reviewed.</p>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="author">Name (optional)</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Leave blank to post anonymously"
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
                <label htmlFor="text">Your Experience</label>
                <textarea
                  id="text"
                  rows={6}
                  placeholder="Share your honest experience, what you learned, or what helped you..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
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