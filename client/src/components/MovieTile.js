import React, { Fragment } from "react";

function MovieTile({ movie }) {
  console.log("LOG 6: ", movie);
  return (
    <Fragment>
      <div className="card m-3 movie-tile">
        <div className="card-title">
          <b>{movie.name}</b>
        </div>
        <img src={movie.image_path} height={150} width={200} />
      </div>
    </Fragment>
  );
}

export default MovieTile;
