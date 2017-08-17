import React from 'react';
import { actors } from '../data';

const movieList = (movies) => {
  return movies.map ((movie) => {
    return <li> {movie} </li>
  })
}

const displayActors = () => {
  return actors.map(actor => {
    return <div className="actor">
      {actor.name}
      <ul>
        {movieList(actor.movies)}
      </ul>
    </div>
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
