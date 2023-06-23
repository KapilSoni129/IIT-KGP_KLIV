import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 

import './admindelete.css';

function Rev() {
  const [reviews, setReviews] = useState([]);
  const [confirmedReviews, setConfirmedReviews] = useState([]);
  const [unconfirmedReviews, setUnconfirmedReviews] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      const reviewsData = response.data.map((review) => ({
        ...review,
        image: review.image, // Use the absolute image URL directly
      }));
      setReviews(reviewsData);
      console.log(reviewsData);
      separateReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const separateReviews = (reviewsData) => {
    const confirmed = reviewsData.filter((review) => review.confirmed);
    const unconfirmed = reviewsData.filter((review) => !review.confirmed);
    console.log(confirmed);
    console.log(unconfirmed);
    setConfirmedReviews(confirmed);
    setUnconfirmedReviews(unconfirmed);
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
      setIsModalOpen(true);
      setModalMessage('The review has been deleted fromt the database.');
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleConfirmReview = async (reviewId, confirmed) => {
    try {
      const response = await axios.put(`/api/reviews/${reviewId}/confirm`, { confirmed });
      const updatedReview = response.data;
      const updatedReviews = reviews.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      );
      setReviews(updatedReviews);
      separateReviews(updatedReviews);
      setIsModalOpen(true);
      setModalMessage('The review has been shifted to the other section.');
    } catch (error) {
      console.error('Error confirming review:', error);
    }
  };
  
   
  return (
    <div className="admin-reviews">
        <center>
            <h2>Reviews-Admin</h2>
            <hr style={{ width: '40%', borderTop: '2px solid #000' }} /><br></br>
        </center>
      {confirmedReviews.length > 0 && (
        <div><center><h3>Displayed Reviews</h3></center>
        <div className="admin-container">
          {confirmedReviews.map((review, index) => (
            <div key={index} className="admin-content">
              <center>
                <button
                  className="card-button"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Delete
                </button>
                <button
                  className="card-button"
                  onClick={() => handleConfirmReview(review.id, review.confirmed)}
                >
                  Remove Confirmation
                </button>
              </center>
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
        </div></div>
      )}

      {unconfirmedReviews.length > 0 && (
        <div><center><h3>Unconfirmed Reviews</h3></center>
        <div className="admin-container">
          {unconfirmedReviews.map((review, index) => (
            <div key={index} className="admin-content">
              <center>
                <button
                  className="card-button"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Delete
                </button>
                <button
                  className="card-button"
                  onClick={() => handleConfirmReview(review.id, review.confirmed)}
                >
                  Give confirmation
                </button>
              </center>
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
        </div>
      )}
    <Modal className="Modal" isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <h2>Admin action</h2>
      <p>{modalMessage}</p>
      <center><button className='card-button' onClick={() => setIsModalOpen(false)}>Close</button></center>
    </Modal>
    </div>
  );
}

export default Rev;
