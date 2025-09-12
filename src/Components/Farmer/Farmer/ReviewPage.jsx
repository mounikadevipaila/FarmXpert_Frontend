import React, { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([
    { 
      id: 1, 
      name: "Emily Farmer", 
      rating: 5, 
      comment: "Excellent quality seeds! My harvest increased by 30% this season. The germination rate was exceptional and the plants were very healthy.",
      date: "2024-05-15"
    },
    { 
      id: 2, 
      name: "Sarah Agriculturist", 
      rating: 4, 
      comment: "Great organic fertilizers. Will definitely purchase again. My crops responded well within just two weeks of application.",
      date: "2024-06-10"
    },
    { 
      id: 3, 
      name: "Michael Agronomist", 
      rating: 5, 
      comment: "The irrigation system I bought works flawlessly. Water conservation has improved significantly on my farm.",
      date: "2024-05-28"
    },
    { 
      id: 4, 
      name: "Emma Organic Farmer", 
      rating: 4, 
      comment: "The pest control solutions are effective and eco-friendly. Saw a noticeable reduction in pests without harming beneficial insects.",
      date: "2024-06-05"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    rating: 0, // <-- Set to 0 so no stars are selected initially
    comment: ''
  });

  useEffect(() => {
    const reviewCards = document.querySelectorAll('[data-new-review="true"]');
    reviewCards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          card.removeAttribute('data-new-review');
        }, 500);
      }, 100);
    });
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', rating: 0, comment: '' });
    setShowForm(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        style={{
          ...styles.star,
          color: i < rating ? '#fbbc42' : '#ddd'
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Customer Reviews</h1>
        <p style={styles.subtitle}>Hear what fellow farmers say about our products and services</p>
        <div style={styles.statsContainer}></div>
        <button onClick={() => setShowForm(true)} style={styles.button}>
          Share Your Experience
        </button>
      </div>

      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Share Your Experience</h2>
              <button style={styles.closeButton} onClick={() => setShowForm(false)}>×</button>
            </div>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Rating:</label>
                <div style={styles.ratingInputContainer}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        ...styles.starInput,
                        color: i < formData.rating ? '#fbbc42' : '#ddd',
                        cursor: 'pointer'
                      }}
                      onClick={() => setFormData(prev => ({ ...prev, rating: i + 1 }))}
                    >
                      ★
                    </span>
                  ))}
                  <span style={styles.ratingText}>
                    {formData.rating > 0 ? `${formData.rating} Star${formData.rating > 1 ? 's' : ''}` : 'No Rating'}
                  </span>
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Experience:</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
                  placeholder="Share your experience with our products or services..."
                />
              </div>
              
              <div style={styles.buttonGroup}>
                <button 
                  type="button" 
                  style={{...styles.button, ...styles.cancelButton}}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" style={styles.button}>
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <div 
            key={review.id} 
            style={styles.reviewCard}
            data-new-review={index === 0 && reviews[0].id > 4 ? "true" : undefined}
          >
            <div style={styles.reviewHeader}>
              <div>
                <h3 style={styles.reviewerName}>{review.name}</h3>
                <div style={styles.reviewDate}>{review.date}</div>
              </div>
              <div style={styles.rating}>{renderStars(review.rating)}</div>
            </div>
            <p style={styles.comment}>{review.comment}</p>
            <div style={styles.reviewFooter}>
              <div style={styles.reviewVerified}>
                <span style={styles.verifiedBadge}>✓</span> Verified Purchase
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Have an experience to share?</h2>
        <p style={styles.ctaText}>Your feedback helps us improve and helps other farmers make informed decisions</p>
        <button onClick={() => setShowForm(true)} style={styles.ctaButton}>
          Write a Review
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: { maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f8fbf9', minHeight: '100vh', marginTop:"80px" },
  header: {
    textAlign: 'center', marginBottom: '40px', padding: '40px 20px',
    background: `linear-gradient(rgba(45, 138, 76, 0.1), rgba(45, 138, 76, 0.1)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200') center/cover`,
    borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.3)', position: 'relative'
  },
  title: { fontSize: '3.5rem', color: '#fff', marginBottom: '15px', fontWeight: '800', letterSpacing: '1px', lineHeight: '1.15' },
  subtitle: { fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.92)', marginBottom: '40px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7', fontWeight: '600', fontStyle: 'italic' },
  statsContainer: { display: 'flex', justifyContent: 'center', gap: '40px', margin: '30px 0', flexWrap: 'wrap' },
  button: { backgroundColor: '#2d8a4c', color: 'white', border: 'none', padding: '14px 32px', fontSize: '1.1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease', margin: '10px', boxShadow: '0 4px 8px rgba(45, 138, 76, 0.3)' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(3px)' },
  modal: { backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', width: '90%', maxWidth: '500px', position: 'relative' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  modalTitle: { color: '#2d8a4c', margin: 0, fontSize: '1.8rem' },
  closeButton: { background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#777', padding: '5px 15px', borderRadius: '50%', lineHeight: '1' },
  form: { display: 'flex', flexDirection: 'column' },
  formGroup: { marginBottom: '25px' },
  label: { display: 'block', marginBottom: '10px', fontWeight: '600', color: '#444', fontSize: '1.1rem' },
  input: { width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' },
  ratingInputContainer: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem', marginTop: '5px' },
  starInput: { transition: 'transform 0.2s, color 0.2s', fontSize: '2.5rem' },
  ratingText: { fontSize: '1.1rem', fontWeight: '500', color: '#555', marginLeft: '10px' },
  textarea: { width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '120px', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' },
  buttonGroup: { display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' },
  cancelButton: { backgroundColor: '#aaa', boxShadow: '0 4px 8px rgba(170,170,170,0.3)' },
  reviewsContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px', marginTop: '20px' },
  reviewCard: { backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderLeft: '4px solid #2d8a4c', display: 'flex', flexDirection: 'column' },
  reviewHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap' },
  reviewerName: { color: '#2d8a4c', margin: '0 0 5px 0', fontSize: '1.3rem', fontWeight: '600' },
  reviewDate: { color: '#777', fontSize: '0.9rem' },
  rating: { fontSize: '1.5rem', whiteSpace: 'nowrap' },
  star: { fontSize: '1.5rem' },
  comment: { color: '#444', lineHeight: '1.7', marginBottom: '15px', fontSize: '1.05rem', flexGrow: 1 },
  reviewFooter: { borderTop: '1px solid #eee', paddingTop: '15px', marginTop: 'auto' },
  reviewVerified: { color: '#2d8a4c', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' },
  verifiedBadge: { backgroundColor: '#2d8a4c', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem' },
  ctaSection: { textAlign: 'center', padding: '50px 20px', margin: '50px 0 30px', backgroundColor: '#f0f9f3', borderRadius: '12px', border: '1px dashed #2d8a4c' },
  ctaTitle: { color: '#2d8a4c', fontSize: '2.2rem', marginBottom: '15px' },
  ctaText: { color: '#555', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 25px', lineHeight: '1.6' },
  ctaButton: { backgroundColor: '#2d8a4c', color: 'white', border: 'none', padding: '14px 40px', fontSize: '1.1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(45, 138, 76, 0.4)' }
};

export default ReviewsPage;
