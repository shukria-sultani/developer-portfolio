import React, { useState } from 'react';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="star-icon filled">★</span>);
    } else {
      stars.push(<span key={i} className="star-icon empty">☆</span>);
    }
  }
  return stars;
};

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, rating: parseInt(rating), comment, id: Date.now() };
    setFeedbacks([newFeedback, ...feedbacks]);
    setName('');
    setRating(1);
    setComment('');
  };

  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    if (sortOption === 'highest') {
      return b.rating - a.rating;
    }
    return b.id - a.id; // Newest first
  });

  return (
    <div className="feedback-wall">
      <h2>Visitor Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="name-input" className="visually-hidden">Your Name</label>
        <input
          id="name-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="rating-select" className="visually-hidden">Rating</label>
        <select
          id="rating-select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {renderStars(star)}
            </option>
          ))}
        </select>
        <label htmlFor="comment-textarea" className="visually-hidden">Your Comment</label>
        <textarea
          id="comment-textarea"
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="sort-options">
        <button onClick={() => setSortOption('newest')} className={sortOption === 'newest' ? 'active' : ''}>Newest First</button>
        <button onClick={() => setSortOption('highest')} className={sortOption === 'highest' ? 'active' : ''}>Highest Rating First</button>
      </div>

      <div className="feedback-cards">
        {sortedFeedbacks.map((feedback) => (
          <div key={feedback.id} className={`feedback-card ${feedback.rating === 5 ? 'featured' : ''}`}>
            <h3>{feedback.name} {feedback.rating === 5 && <span className="featured-badge">🌟 Featured</span>}</h3>
            <p className="rating">{renderStars(feedback.rating)}</p>
            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCard;