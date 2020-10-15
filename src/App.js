import React, { Component, useState, useEffect } from "react";
import './App.css'
import RoomsPage from './Rooms/Rooms';
import Payment from './Rooms/Payments';
import RoomDetails from './Rooms/RoomDetails';
import { Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Search from './Rooms/Search'
import { UserContext } from "./context/UserContext";
import ProtectedRoute from './ProtectedRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookings from './Rooms/MyBookings'

const url = "/rooms/details";
const App = () => {
  const [data, setData] = useState('')

  // console.log(data)
  return (

    <>

      <Switch>
        <UserContext.Provider value={data}>
          <ProtectedRoute exact path="/payment" component={Payment} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" render={() => <RoomsPage />} />
          <Route exact path={'/rooms/details/:_id'} component={RoomDetails} />
        </UserContext.Provider>

      </Switch>
    </>

  );
}

export default App;
