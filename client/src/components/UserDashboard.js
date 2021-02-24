import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MovieDirectory from "./MovieDirectory";

function UserDashboard({ history }) {
  //   console.log(sessionStorage.getItem("____"));

  const [allMovies, setAllMovies] = useState([]);

  const getMovieCatalog = async () => {
    const response = await fetch("http://localhost:5000/movies/", {
      method: "GET",
      headers: { Authorization: `Token ${sessionStorage.getItem("____")}` },
    });

    const allMoviesTemp = await response.json();

    setAllMovies(allMoviesTemp);
    // console.log('LOG 5: ', allMovies)
  };

  useEffect(() => {
    getMovieCatalog();
  }, []);

  return (
    <Fragment>
      <div id="home-container">
        <div id="cover">
          <img id="logo" src="https://i.imgur.com/koU41fn.png" alt="logo" />
          <button
            id="log-out-button"
            className="btn btn-danger"
            onClick={() => history.push("/logout-user")}
          >
            {" "}
            Sign Out{" "}
          </button>

          <div id="movie-directory" className="container my-5">
            <MovieDirectory allMovies={allMovies} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserDashboard);
