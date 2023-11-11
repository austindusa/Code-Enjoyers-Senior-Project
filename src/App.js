import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import LogIn from "./login";
import SignUp from "./signup";


function App() {
  return <Router> 
    <div>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/login" element = {<LogIn/>}/>
      <Route path = "/signup" element = {<SignUp/>}/>
    </Routes>
  </div>
  </Router>;
}

export default App;
