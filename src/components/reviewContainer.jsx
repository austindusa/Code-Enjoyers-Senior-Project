
import userName from "../images/userName.jpg";
import WriteReview from './WriteReview';
import React, { useState } from 'react';

const ReviewContainer = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);

  const handleAddReviewClick = () => {
    setShowWriteReview(true);
  };

  const handleCloseWriteReview = () => {
    setShowWriteReview(false);
  };


  return (
    <div className="review-container">
      <div className="title-and-bookmark">
        <div className="bit-title">
          <h2 id="title">Externship Title</h2>
        </div>
        <svg
          id="book-mark"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="26"
          viewBox="0 0 19 26"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 24.9485V2.05504C19 0.93 18.0747 0 16.9587 0H2.37337C1.25871 0 0.333374 0.931292 0.333374 2.05375V24.9485C0.333374 25.1681 0.413374 25.3812 0.560041 25.544C0.699486 25.702 0.895408 25.8031 1.10855 25.827C1.32169 25.851 1.5363 25.796 1.70937 25.6732L9.66671 20.1513L17.624 25.6732C17.7218 25.7425 17.8336 25.7909 17.9521 25.8152C18.0706 25.8394 18.1931 25.8389 18.3114 25.8137C18.4297 25.7886 18.5411 25.7393 18.6383 25.6692C18.7354 25.5991 18.816 25.5097 18.8747 25.4071C18.9577 25.2677 19.0009 25.1094 19 24.9485ZM2.33337 22.8573L8.50271 18.5767C8.8422 18.3414 9.24922 18.2148 9.66671 18.2148C10.0842 18.2148 10.4912 18.3414 10.8307 18.5767L17 22.8573V2.05504C17.0001 2.03255 16.995 2.01033 16.9851 1.98999C16.9752 1.96966 16.9607 1.95172 16.9427 1.9375H2.39071C2.3729 1.95159 2.35852 1.96931 2.34861 1.98941C2.3387 2.00951 2.3335 2.03148 2.33337 2.05375V22.8573Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="organization-name">
        <h3 className="name">Organization Name</h3>

        <p className="location-1">
          <span className="location">Location:</span>
          <span className="city-state"> City, State</span>
        </p>
      </div>

      <div className="description">
        <h3>Description:</h3>
        <p className="review-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          est rerum maiores sint a illo earum minus voluptate aliquid
          consequuntur incidunt fuga voluptatem recusandae dolorum quis modi
          optio aut libero ea doloremque, tempore repudiandae maxime similique.
          Ullam doloremque perferendis atque.
        </p>
      </div>

      <div className="ratings">
        <h3 className="my-rating">Ratings:</h3>
        <div className="margin">
          <span className="rating-title">Overall Rating:</span>
          <span className="rate">4.3*</span>
        </div>
        <div className="margin">
          <span className="percent-title">Would Take Again:</span>
          <span className="percent">78%</span>
        </div>
        <div className="margin">
          <span className="paid-title">Paid Opportunity:</span>
          <span className="paid-result">Yes</span>
        </div>
      </div>

      <div className="reviews">
        <div className="user-review">
          <span>Reviews:</span>
          <button onClick={handleAddReviewClick}>Add Review</button>
        </div>
      </div>

      {showWriteReview && (
        <WriteReview
          trigger={showWriteReview}
          setTrigger={setShowWriteReview}
        />
      )}

      
      <div className="user-review-container">
        <img
          className="user-image"
          src={userName}
          alt="This the image of username"
        />
        <span className="user-name-1">Username</span>
        <span className="rating">Rating: *****</span>
        <div className="user-preference">
          Paid Opportunity: Yes <br></br>Would Take Again: Yes
        </div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
          perspiciatis mollitia reprehenderit blanditiis voluptatum fugiat. Ea
          harum sequi explicabo?
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
