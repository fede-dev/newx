import React from "react";
import Home from "./components/Home";
import Prueba from "./components/Prueba";
import User from "./components/User";
//import { Route, Switch } from "react-router"; NO se usa más
import { Switch, Route, Link } from "react-router-dom";
import HidenText from "./components/HidenText";
import TodoList from "./components/todo";
import UserDeatail from "./components/UserDeatail";

function App() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/prueba">Prueba</Link>
      <Link to="/users">User</Link>
      <Link to="/todolist">todolist</Link>
      <Switch>
        <Route exact={true} path="/prueba" render={() => <Prueba />} />
        <Route exact={true} path="/home" render={() => <Home />} />
        <Route exact={true} path="/users" render={() => <User />} />
        <Route exact={true} path="/users/:id" render={() => <UserDeatail />} />
        <Route
          exact={true}
          path="/todolist"
          render={() => <TodoList></TodoList>}
        ></Route>
      </Switch>
      <HidenText text="Hello World" />
    </>
  );
}

export default App;
