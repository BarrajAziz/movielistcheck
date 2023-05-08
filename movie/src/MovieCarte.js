import React from 'react'
import './moviecarte.css'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';

const MovieCarte = ({movie}) => {
  return (
    <div>
<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.main_img} alt="img"/>
      <h1>{movie.title}</h1>
    
      <span className="minutes">117 min</span>
     
    </div>
    <div className="movie_desc">
      <p className="text">
      {movie.description}
      </p>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        />
          <Link to={`/movie/${movie.id}`}> Trailer</Link>
    </div>
  </div>
 
  <div className="blur_back bright_back"></div>
</div>
</div>
  )
}

export default MovieCarte