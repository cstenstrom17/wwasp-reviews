import { useState } from 'react'
import Head from 'next/head'
import { supabase } from '../lib/supabase'
import Layout from '../components/layout'
import styles from '../styles/submit.module.css'

export default function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    address: '',
    zip: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setError('Program name is required')
      return
    }

    if (!formData.city.trim() || !formData.state.trim()) {
      setError('City and state are required')
      return
    }

    try {
      setSubmitting(true)
      setError(null)

      const { error: dbError } = await supabase
        .from('schools')
        .insert([
          {
            name: formData.name.trim(),
            city: formData.city.trim(),
            state: formData.state.trim(),
            address: formData.address.trim() || null,
            zip: formData.zip.trim() || null,
            is_approved: false
          }
        ])

      if (dbError) throw dbError

      setSuccess(true)
      setFormData({ name: '', city: '', state: '', address: '', zip: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Error submitting program: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Submit a Program - Healing Paths</title>
        <meta name="description" content="Submit a program or institution to our directory." />
      </Head>

      <Layout>
        <div className={styles.header}>
          <h1>Submit a Program</h1>
          <p>Know of a program that should be listed? Submit it here. All submissions are reviewed before appearing on the site.</p>
        </div>

        {success && (
          <div className={styles.success}>
            <p>Thank you! Your submission has been received and will be reviewed shortly.</p>
          </div>
        )}

        {error && (
          <div className={styles.errorBox}>
            <p>{error}</p>
          </div>
        )}

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Program Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Sunrise Academy"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="e.g. Salt Lake City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="state">State *</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="e.g. Utah"
                  value={formData.state}