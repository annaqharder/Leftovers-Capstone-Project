import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { UserProvider } from "./context/UserProvider";
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants';
import Coffee from './pages/Coffee';
import Bars from './pages/Bars';
import Map from './pages/Map';
import WantToVisit from './pages/WantToVisit';
import Profile from './pages/Profile';
import { RestaurantProvider } from "./context/RestaurantProvider";
import { CoffeeProvider } from "./context/CoffeeProvider";


function App() {

  return (
    <UserProvider>
      <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <RestaurantProvider>
          <CoffeeProvider>
          <Route path="/all-restaurants">
            <Restaurants />
          </Route>
          <Route path="/all-coffee">
            <Coffee />
          </Route>
          <Route path="/all-bars">
            <Bars />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/want-to-visit">
            <WantToVisit />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          </CoffeeProvider>
          </RestaurantProvider>
        </Switch>
    </UserProvider>
  );
}

export default App;
