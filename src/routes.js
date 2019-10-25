import React from 'react';
import { Route, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import DetailView from "./components/DetailView";
import App from "./App";

const AppRoutes  = () =>
    <App>
        <Switch>
            <Route exact path="/" name="movieList" component={MovieList} />
            <Route exact path="/detail-movie/:id" name="detailView" component={DetailView} />
        </Switch>
    </App>

export default AppRoutes ;