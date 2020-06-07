import React from 'react';
import Rating from './Rating';
import Reviews from './Reviews';
import "../stylesheet/rating.css";
import "../stylesheet/reviews.css";
const SongPage = ({songname, artistname, avgrating, songlyrics, genre, mood}) => {
    return(
		<div className = 'songpage'>
            <div className = 'song1'>
                <img className = 'songart' alt = 'Song Cover' src = {require('./playlistimage.jpeg')} />
                <div className = 'songconta'>
                    <h2 className = 'songtag'>Song</h2>
                    <h1 className = 'songname'>{songname}</h1>
                    <h3 className = 'songtext1'>By</h3>
                    <h3 className = 'songtext2'>{artistname}</h3>
                    <div className = 'block'>
                        <h3 className = 'songtext1'>Ratings</h3>
                        <h3 className = 'songtext2'>{avgrating}/10</h3>
                    </div>
                    <div className = 'block'>
                        <h3 className = 'songtext1'>Genre</h3>
                        <h3 className = 'songtext2'>{genre}</h3>
                        
                    </div>
                    <div className = 'block'>
                        <h3 className = 'songtext1'>Mood</h3>
                        <h3 className = 'songtext2'>{mood}</h3>
                    </div>
                    <button className = 'clickme'>Add to Playlist</button>
                    </div>
            </div>
            <div className = 'song1'>
                <div className = 'conta3'>
                <h2 className = 'songtag'>Lyrics</h2>
                <div className = 'lyrics'>
                    <p className = 'songtext3'>{songlyrics}</p>
                </div>
                </div>
                <div className = 'conta4'>
                    <h2 className = 'songtag'>Reviews</h2>
                    <div className = 'reviewscroll'>
                        <Reviews 
                        username = 'Robert Downey'
                        review = 'Cool Music'
                        />
                        <Reviews 
                        username = 'Robert Downey'
                        review = 'Cool Music'
                        />
                        <Reviews 
                        username = 'Robert Downey'
                        review = 'Cool Music'
                        />
                        <Reviews 
                        username = 'Robert Downey'
                        review = 'Cool Music'
                        />
                        <Reviews 
                        username = 'Robert Downey'
                        review = 'Cool Music'
                        />
                    </div>
                    <h2 className = 'songtag'>Rate and Review</h2>
                    <Rating />
                    <div className = 'addreview'>
                        <textarea className = 'revinput' placeholder = 'Add Review'/>
                    </div>
                    <button className = 'clickme2'>Submit</button>
                </div>
                       
            
            
            
            </div>
        </div>
		);
}

export default SongPage;