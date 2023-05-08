
import MovieCarte from './MovieCarte'
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieListe = ({movies}) => {

  return (
    <div> 
        {movies.map( (el) => <MovieCarte  movie={el} />)}
    </div>
   
  )
}

export default MovieListe