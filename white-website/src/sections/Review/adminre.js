import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './adminre.css';

function Rev() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      const reviewsData = response.data.map((review) => ({
        ...review,
        image: `...../backend/uploads/${review.image}`, // Update the image URL
      }));
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const renderReviewStars = (starCount) => {
    const starElements = [];
    for (let i = 1; i <= 5; i++) {
      starElements.push(
        <span
          key={i}
          className={`star ${i <= starCount ? 'selected' : ''}`}
        >
          ★
        </span>
      );
    }
    return starElements;
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`/api/reviews/${reviewId}`);
      fetchReviews(); // Fetch updated reviews after deletion
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  
   
  return (
    <div className="admin-reviews">
        <center>
            <h2>Reviews-Admin</h2>
            <hr style={{ width: '40%', borderTop: '2px solid #000' }} /><br></br>
        </center>
        {reviews.length > 0 && (
            <div className="admin-container">
            {reviews.map((review, index) => (
                <div key={index} className="admin-content">
                    <center><button className='card-button' onClick={() => handleDeleteReview(review.id)}>Delete Review</button></center>
                    <p>{review.comment}</p>
                    <h3>{review.name}</h3>
                    <h4>{review.designation}</h4>
                    <div className="stars-admin">
                        {renderReviewStars(review.stars)}
                    </div>
                    <img
                        src={review.image}
                        alt="Customer"
                        className="review-image"
                    />
                </div>
            ))}
            </div>
        )}
    </div>
  );
}

export default Rev;
