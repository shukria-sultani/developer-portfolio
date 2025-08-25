import React, { useState } from 'react';


const FeedbackWall = () => {
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
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
          ))}
        </select>
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="sort-options">
        <button onClick={() => setSortOption('newest')}>Newest First</button>
        <button onClick={() => setSortOption('highest')}>Highest Rating First</button>
      </div>

      <div className="feedback-cards">
        {sortedFeedbacks.map((feedback) => (
          <div key={feedback.id} className={`feedback-card ${feedback.rating === 5 ? 'featured' : ''}`}>
            <h3>{feedback.name} {feedback.rating === 5 && <span className="featured-badge">🌟 Featured</span>}</h3>
            <p className="rating">Rating: {feedback.rating} Stars</p>
            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackWall;
