import React from 'react';
import { movies } from '../data';

const genreList = (genres) => {
  return genres.map ((genre) => {
    return <li> {genre} </li>
  })
}

const displayMovies = () => {
  return movies.map(movie => {
    return <div className="movie">
      {movie.title} - {movie.time} mins
      <ul>
        {genreList(movie.genres)}
      </ul>
    </div>
  })
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies()}
    </div>
  );
};

export default Movies;
