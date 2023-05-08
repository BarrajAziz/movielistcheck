import React from "react";
import  {useParams}  from 'react-router-dom'
const Trailer = ({movie}) => {
    const {id} = useParams();
    const foundMovie=movie.find((el)=> el.id === +id)

  return (
    <div>
        <h1>{foundMovie.title}</h1>
      <iframe
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{foundMovie.description}</p>
    </div>
  );
};

export default Trailer;
