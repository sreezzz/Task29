import React, { Component } from "react";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
// import EditUser from "./Component/EditUser";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Route, Switch as Routes } from "react-router-dom";
import Home from "./Components/Home";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exccat path="/edit/:id" component={EditUser} />
        <Route path="**" component={NotFound} />

      </Routes>
    </Router>
  );
}

export default App;
