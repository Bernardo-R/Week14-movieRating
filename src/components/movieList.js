import React from "react";
import Stars from "./stars";
import Review from "./review";
//passing the array of movies as a prop and mapped each element to create a card
function MovieList(props) {
  return (
    //For each movie object in the movies array, a card is created with a title, release date, and an image.
    <>
      {props.movies.map((movie, index) => (
        <div className="card m-3" style={{ width: "18rem" }} key={index}>
          <img src={movie.Poster} class="card-img-top" alt="movie" />
          <div class="card-body">
            <h5 class="card-title">{movie.Title}</h5>
            <p class="card-text">
              <span>
                <small>Release : {movie.Year}</small>
              </span>
            </p>
            <p className="rate">
              Rate : <Stars />
            </p>
          </div>
          <Review />
        </div>
      ))}
    </>
  );
}
export default MovieList;
