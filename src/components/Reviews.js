import React from 'react';

const Reviews = ({username, review}) => {
    return(
    <div className = 'reviews'>
        <img className = 'reviewpic' alt = 'Profile Pic' src = {require('./rdj.jpg')}/>
    <h3 className = 'songtext2'>{username}</h3>
    <p className = 'reviewtext'>{review}</p>
    </div>
    );
} 
export default Reviews;