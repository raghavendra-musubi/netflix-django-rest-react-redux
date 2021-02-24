import React, { Fragment } from "react";
import MovieTile from './MovieTile'

function MovieCategory({ categoryName, categoryMovies }) {
  console.log("LOG 4: ", categoryName, categoryMovies);
  return (
    <Fragment>
      <div className="my-5">
        <p>
          <b className='text-light'>{categoryName.toUpperCase()}</b>
        </p>
        <hr className='border border-light'/>
        <div className='d-flex flex-row'>
            {categoryMovies.map( movie => <MovieTile key={movie.id} movie={movie}/> )}
        </div>
      </div>
    </Fragment>
  );
}

export default MovieCategory;
