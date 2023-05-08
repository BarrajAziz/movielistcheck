import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Search = ({getData,getRate,rating}) => {
    const onStarClick=(nextValue)=>{
        getRate(nextValue)
    }
  return (
    <div>
        <input type='text' placeholder='Search' onChange={(el)=> getData(el.target.value)} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />


    </div>
  )
}

export default Search