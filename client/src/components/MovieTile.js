import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function MovieTile({ movie, history }) {
//   console.log("LOG 6: ", movie);
  return (
    <Fragment>
      <div className="card m-3 movie-tile" onClick={() => history.push(`/movie-detail/${movie.id}`)}>
        <div className="card-title pt-2">
          <b>{movie.name.toUpperCase()}</b>
        </div>
        <div className="card-body">
          <img src={movie.image_path} height={150} width={200} alt={movie.name} />
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(MovieTile);
