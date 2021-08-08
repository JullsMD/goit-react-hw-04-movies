import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar';
import routes from './routes';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() => import('./views/HomePage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));

function App() {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={<Loader type="Rings" color="#FFF" height={80} width={80} />}
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
