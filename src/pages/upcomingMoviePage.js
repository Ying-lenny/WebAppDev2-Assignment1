import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });
  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={upcoming}
          action={(movie) => {
            return <AddToFavoritesButton movie={movie} />;
          }}
        />
    );
  };

export default UpcomingMoviePage