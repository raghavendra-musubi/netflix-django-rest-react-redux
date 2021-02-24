import React, { Fragment } from "react";
import MovieTile from './MovieTile'

function MovieCategory({ categoryName, categoryMovies }) {

  return (
    <Fragment>
      <div className="my-5 container">
        <p>
          <b className='text-light'>{categoryName.toUpperCase()}</b>
        </p>
        <hr className='border border-light'/>
        <div className='d-flex flex-row flex-wrap justify-content-around'>
            {categoryMovies.map( movie => <MovieTile key={movie.id} movie={movie}/> )}
        </div>
      </div>
    </Fragment>
  );
}

export default MovieCategory;
