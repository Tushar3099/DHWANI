import React from "react";

const Reviews = ({ username, review }) => {
  return (
    <div className="reviews">
      <img
        className="reviewpic"
        alt="Profile Pic"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <h3 className="songtext2">{username}</h3>
      <p className="reviewtext">{review}</p>
    </div>
  );
};
export default Reviews;
