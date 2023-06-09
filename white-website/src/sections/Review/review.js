import React, { useState } from 'react';
import axios from 'axios';

import './review.css';

function Review() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [image, setImage] = useState(null);

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
        console.log('Review submitted successfully');
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
            <div className='input-review'>
              <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="name-input"
              />

              <input
                type="text"
                value={designation}
                onChange={handleDesignationChange}
                placeholder="Enter your designation"
                className="designation-input"
              />
            </div>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Enter your comment"
              className="comment-input"
            ></textarea>
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
        </div>

        <input
          type="file"
          onChange={handleImageChange}
          className="image-input"
        /><br></br>
        
        <br></br>
        <button onClick={handleSubmit} className="card-button">
          Submit
        </button>
        </center>
    </div>
    </div>
  );
}

export default Review;
