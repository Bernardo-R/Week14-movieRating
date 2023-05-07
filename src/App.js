import React from "react";
import "./App.css";
import NavBar from "../src/components/nav";
import MovieList from "./components/movieList";

function App() {
  const movies = [
    //arrays of movies
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      Title: "Dragon Ball Z: Resurrection &quot;F&quot;",
      Year: "2015",
      imdbID: "tt3819668",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjU1ZTM3MGItNDdiNS00ZjE2LTk4NTAtNTU0YmE4MDJmNjc0XkEyXkFqcGdeQXVyMzkzODQwMA@@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title:
        "Game of Thrones Conquest & Rebellion: An Animated History of the Seven Kingdoms",
      Year: "2017",
      imdbID: "tt7937220",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGYzNDJiOTgtN2Y1OC00NmM2LTk3MTMtZmFhNmJlMzQzNGNhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
    },
    {
      Title: "Creed",
      Year: "2015",
      imdbID: "tt3076658",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmZkYjQzY2QtNjdkNC00YjkzLTk5NjUtY2MyNDNiYTBhN2M2XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
    },
    {
      Title: "Assassin's Creed",
      Year: "2016",
      imdbID: "tt2094766",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzE1OTczNTc1OF5BMl5BanBnXkFtZTgwMzgyMDI3MDI@._V1_SX300.jpg",
    },
    {
      Title: "Creed II",
      Year: "2018",
      imdbID: "tt6343314",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
    },
    {
      Title: "Creed III",
      Year: "2023",
      imdbID: "tt11145118",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },

    {
      Title: "Avatar: The Way of Water",
      Year: "2022",
      imdbID: "tt1630029",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Top Gun: Maverick",
      Year: "2022",
      imdbID: "tt1745960",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
    },
    {
      Title: "Top Gun",
      Year: "1986",
      imdbID: "tt0092099",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Assassin's Creed III",
      Year: "2012",
      imdbID: "tt2175563",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk0MTMwZjYtZWZiNS00YjE3LWE1MzEtOWI1YjY0N2YxMWRiXkEyXkFqcGdeQXVyNjgzMDgzODM@._V1_SX300.jpg",
    },
    {
      Title: "Assassin's Creed IV: Black Flag",
      Year: "2013",
      imdbID: "tt2739708",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzcyMjk2ODItMWI3ZS00Mjg1LTg1ZjgtMGM0ZTZkYjA2YmU2XkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_SX300.jpg",
    },
    {
      Title: "Assassin's Creed: Brotherhood",
      Year: "2010",
      imdbID: "tt1699759",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjc5NWU2ZjMtNTVkOC00MzBmLWI5M2YtZmVhNWU5Mjg2ZGQyXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_SX300.jpg",
    },
    {
      Title: "Dragon Ball Super",
      Year: "2015–2018",
      imdbID: "tt4644488",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg",
    },
    {
      Title: "Dragon Ball Super: Broly",
      Year: "2018",
      imdbID: "tt7961060",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Dragon Ball Z: Battle of Gods",
      Year: "2013",
      imdbID: "tt2263944",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwOWJlZTYtYWFlNy00Y2NiLWEyMDgtODM0MjE3ZGZlODZiXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SX300.jpg",
    },
  ];

  // const getMovies = (search) =>{
  //   fetch(`https://www.omdbapi.com/?s=${search}&apikey=73b76b1f`)
  //   .then(response => response.json())
  //   .then(data => setMovies(data))
  // }

  return (
    //this will be display on app
    <div className="main">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 list">
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
