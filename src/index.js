/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from './pages/upcomingMoviePage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

//People Page
import peopleDetailPage from './pages/peopleDetailPage';
import PeopleContextProvider from "./contexts/peopelContext";

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <PeopleContextProvider>
              <Switch>
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                <Route exact path="/people/popular" component={peopleDetailPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
              </PeopleContextProvider>
            </GenresContextProvider>
          </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));