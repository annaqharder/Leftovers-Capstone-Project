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
import Visits from "./components/Visits";
import { RestaurantProvider } from "./context/RestaurantProvider";
import { CoffeeProvider } from "./context/CoffeeProvider";
import { BarProvider } from "./context/BarProvider";
import { VisitProvider } from "./context/VisitProvider";
import { useHistory } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import NewVisitForm from "./components/NewVisitForm";
import { EateryProvider } from "./context/EateryProvider";

function App() {
  const history = useHistory();

  const [user, setUser] = useState([])
  // const [visits, setVisits] = useState([])

  const {data} = useQuery(["user"], () => {
    fetch("/me").then((res) => res.json()).then((res) => setUser(res))
  })

  return (

    <UserProvider>
    <EateryProvider>
      <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <RestaurantProvider>
          <Route path="/all-restaurants">
            <Restaurants />
          </Route>
          <VisitProvider >
          <Route exact path="/restaurants/:id">
            <Visits/>
          </Route>
          <CoffeeProvider>
          <Route path="/all-coffee">
            <Coffee />
          </Route>
          <Route exact path="/coffee-shops/:id">
            <Visits/>
          </Route>
          <BarProvider>
          <Route path="/all-bars">
            <Bars />
          </Route>
          <Route exact path="/bars/:id">
            <Visits/>
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
            <Profile
            user={user}
            setUser={setUser}
            />
          </Route>
          </BarProvider>
          </CoffeeProvider>
          </VisitProvider>
          </RestaurantProvider>
        </Switch>
    </EateryProvider>
    </UserProvider>
  );
}

export default App;
