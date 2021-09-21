import React from "react";
import Home from "./components/Home";
import Prueba from "./components/Prueba";
import User from "./components/User";
//import { Route, Switch } from "react-router"; NO se usa más
import { Switch, Route, Link } from "react-router-dom";
import HidenText from "./components/HidenText";

function App() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/prueba">Prueba</Link>
      <Link to="/users">User</Link>
      <Switch>
        <Route path="/prueba" render={() => <Prueba />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/users" render={() => <User />} />
      </Switch>
      <HidenText text="Hello World" />
    </>
  );
}

export default App;
