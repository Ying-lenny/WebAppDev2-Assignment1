import React, { useState, useEffect } from "react";
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import PageTemplate from "../components/templateMovieListPage";
import {upcoming} from "../api/tmdb-api";

const UpcomingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      upcoming().then(movies => {
        setMovies(movies);
      });
    }, []);
  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesButton movie={movie} />;
          }}
        />
    );
  };

export default UpcomingMoviePage