import React, { Fragment } from "react";
import MovieCategory from "./MovieCategory";

function MovieDirectory({ allMovies }) {
  const CATEGORY_CHOICES = {
    1: "Adventure",
    2: "Action",
    3: "Thriller",
    4: "Horror",
    5: "Comedy",
    6: "Musical",
    7: "Romance",
  };

  //   console.log("LOG 1: ", allMovies);

  return (
    <Fragment>
        {Object.keys(CATEGORY_CHOICES).map((key, index) => {
          // console.log("LOG 3: ", key, CATEGORY_CHOICES[key]);
          let categoryMovies = allMovies.filter(
            (movie) => movie.category_id === parseInt(key)
          );
          // console.log(categoryMovies);
          return (
            <MovieCategory
              key={key}
              categoryName={CATEGORY_CHOICES[parseInt(key)]}
              categoryMovies={categoryMovies}
            />
          );
        })}
    </Fragment>
  );
}

export default MovieDirectory;
