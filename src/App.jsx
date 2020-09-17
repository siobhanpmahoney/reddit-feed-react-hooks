import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router";
import { DD_RUM, DD_LOGS, ASYNC_DD_LOGS } from './ddRUM'
import { datadogLogs } from '@datadog/browser-logs'

import {FavoriteContext} from './context/FavoriteProvider'
import { fetchAllColors } from './service'
import NavBar from './components/Nav/NavBar'
import Home from "./components/Home"
import FeedContainer from "./components/FeedContainer"
import FavoriteContainer from "./components/FavoriteContainer"
import ErrorContainer from "./components/Errors/ErrorContainer"
import PostList from "./components/PostList"

DD_RUM()
DD_LOGS() && datadogLogs.addLoggerGlobalContext('referrer', document.referrer) && datadogLogs.logger.setLevel('debug')

function App() {
  const {updateFavorites} = useContext(FavoriteContext);

  const [colors, setColors] = useState([])

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
    .then(res => res.json())
    .then(response => setColors(response.data))

  }, [])


  return (

    <div className = 'App'>

      <NavBar />

        <Switch>
          <Route exact path="/" render={(routerProps) => {
              return <Home history={routerProps.history} />;
            }} />

          <Route exact path="/feed" render={(routerProps) => {
              return <FeedContainer history={routerProps.history} />
          }} />

          <Route exact path="/favorites" render={(routerProps) => {
              return <FavoriteContainer history={routerProps.history} />;
          }} />

        <Route exact path="/errors" render={(routerProps) => {
              return <ErrorContainer history={routerProps.history} />;
          }} />

          <Redirect to="/feed" />
        </Switch>


      </div>






        );
      }

export default App;
