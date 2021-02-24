import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function MovieDetail({ match, history }) {
  const CATEGORY_CHOICES = {
    1: "Adventure",
    2: "Action",
    3: "Thriller",
    4: "Horror",
    5: "Comedy",
    6: "Musical",
    7: "Romance",
  };

  const { movieID } = match.params;
  //   console.log("LOG 6: ", movieID);

  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = async () => {
    const response = await fetch(`http://localhost:5000/movies/${movieID}`, {
      method: "GET",
      headers: { Authorization: `Token ${sessionStorage.getItem("____")}` },
    });

    const currentMovie = await response.json();
    console.log("LOG 7: ", currentMovie);
    setMovieDetail(currentMovie);
  };

  useEffect(() => {
    getMovieDetail();
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

          <div className="container my-5 movie-detail">

            <div className="card">
              <img
                className="card-img-top"
                src={movieDetail.image_path}
                alt={movieDetail.name}
              />
              <div className="card-body">
                <h5 className="card-title">{movieDetail.name}</h5>
                <p>
                  <em>{CATEGORY_CHOICES[movieDetail.category_id]} </em>
                </p>
                <hr />
                <p>{movieDetail.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => window.open(`${movieDetail.link}`, `_blank`)}
                >
                  {" "}
                  Show on IMDB{" "}
                </button>
              </div>
            </div>

            <button className='btn btn-danger mt-5' onClick={() => history.push('/user-dashboard')}> Dashboard </button>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(MovieDetail);
