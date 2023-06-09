import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{useNavigate}  from 'react-router-dom';
import './cust.css';

function Cust() {
  const [reviews, setReviews] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      const reviewsData = response.data.map((review) => ({
        ...review,
        image: `.../backend/uploads/${review.image}`, // Update the image URL
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
  
  const handleReviewButtonClick = () => {
    history('/review');
  };

  return (
    <div className="customer-reviews">
        <center>
            <h2>Customer Reviews</h2>
            <hr style={{ width: '40%', borderTop: '2px solid #000' }} /><br></br>
        </center>
        {reviews.length > 0 && (
            <div className="review-container">
            {reviews.map((review, index) => (
                <div key={index} className="review-content">
                <p>{review.comment}</p>
                <h3>{review.name}</h3>
                <h4>{review.designation}</h4>
                <div className="stars-container">
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
        <center><br/><button onClick={handleReviewButtonClick} className='card-button'>Give us a Review</button></center>
    </div>
  );
}

export default Cust;
