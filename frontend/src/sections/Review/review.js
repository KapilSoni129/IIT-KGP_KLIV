import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the Modal component
import axios from 'axios';

import './review.css';

function Review() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [image, setImage] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleStarClick = (selectedStars) => {
    setStars(selectedStars);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    // Check if any required field is empty
    if (!name || !designation || !comment || !stars) {
      setIsModalOpen(true);
      setModalMessage('Error. Please fill all the starred valeus.');
    }

    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append the image file to the FormData
      formData.append('image', image);

      // Append other review data to the FormData
      formData.append('name', name);
      formData.append('designation', designation);
      formData.append('comment', comment);
      formData.append('stars', stars);

      // Make a POST request to the server with the FormData
      const response = await axios.post('/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setIsModalOpen(true);
        setModalMessage('Review submitted successfully. We will contact you soon.');
        setName('');
        setDesignation('');
        setComment('');
        setStars(0);
        setImage(null);
      }else {
        setIsModalOpen(true);
        setModalMessage('Error submitting review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };


  return (
      <div>
        <center>
          <h4>REVIEW</h4>
          <h1>Please tell us what you think about our work</h1>
          <p>This is the content of the Review section.</p>
        </center>
        <div className='review-input'>
          <div className='same-area'>
            <div className='coloum-area'>
              <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name *"
              className="name-input"
              />
              <input
                type="text"
                value={designation}
                onChange={handleDesignationChange}
                placeholder="Enter your affiliation *"
                className="designation-input"
              />
            </div>
            <div className='row-area'>      
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Enter your comment *"
              className="comment-input"
            ></textarea>
            </div>  
          </div>
          <center>
        <div className="star-rating">
          <span
            onClick={() => handleStarClick(1)}
            className={`star ${stars >= 1 ? 'selected' : ''}`}
          >
            ★
          </span>
          <span
            onClick={() => handleStarClick(2)}
            className={`star ${stars >= 2 ? 'selected' : ''}`}
          >
            ★
          </span>
          <span
            onClick={() => handleStarClick(3)}
            className={`star ${stars >= 3 ? 'selected' : ''}`}
          >
            ★
          </span>
          <span
            onClick={() => handleStarClick(4)}
            className={`star ${stars >= 4 ? 'selected' : ''}`}
          >
            ★
          </span>
          <span
            onClick={() => handleStarClick(5)}
            className={`star ${stars === 5 ? 'selected' : ''}`}
          >
            ★
          </span>
          <span className="required-field">*</span>
        </div>
        <p>Profile photo:
        <input
          type="file"
          onChange={handleImageChange}
          className="image-input"
        /></p>
        <button onClick={handleSubmit} className="card-button">
          Submit
        </button>
        </center>
    </div>
    <Modal className="Modal" isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <h2>{modalMessage.startsWith('Error') ? 'Error' : 'Success'}</h2>
      <p>{modalMessage}</p>
      <center><button className='card-button' onClick={() => setIsModalOpen(false)}>Close</button></center>
    </Modal>
    </div>
  );
}

export default Review;
