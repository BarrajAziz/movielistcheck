import "./App.css";
import { useState } from "react";
import MovieListe from "./MovieListe";
import Search from "./Search";
import Add from "./Add";
import { Routes, Route } from "react-router-dom";
import Trailer from "./Trailer";

function App() {
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      main_img:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rate: 4,
      genre: "Action,Adventure",
      trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      main_img:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rate: 5,
      genre: "Action,Adventure,Family",
    },
    {
      id: 3,
      title: "The Godfather",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      main_img: "",
      rate: 3,
      genre: "Action,Adventure,Family",
    },
  ]);
  const getData = (keyword) => {
    setKeyword(keyword);
  };
  const getRate = (rate) => {
    setRating(rate);
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <Search getData={getData} getRate={getRate} />
      <Add handleAdd={handleAdd} />

      <Routes>
        <Route path="/" element={<MovieListe
          movies={movies.filter(
            (el) =>
              el.rate >= rating &&
              el.title.toLowerCase().includes(keyword.trim().toLowerCase())
          )}
        /> } />
        <Route path="/movie/:id" element={<Trailer movie={movies}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
