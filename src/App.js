import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
          <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>

          <Route path="/add" exact><Add /></Route>

          <Route path="/edit/:id" exact ><Edit /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
