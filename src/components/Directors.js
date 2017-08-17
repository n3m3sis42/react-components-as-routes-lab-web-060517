import React from 'react';
import { directors } from '../data';

const movieList = (movies) => {
  return movies.map ((movie) => {
    return <li> {movie} </li>
  })
}

const displayDirectors = () => {
  return directors.map(director => {
    return <div className="director">
      {director.name}
      <ul>
        {movieList(director.movies)}
      </ul>
    </div>
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {displayDirectors()}
    </div>
  );
}

export default Directors
