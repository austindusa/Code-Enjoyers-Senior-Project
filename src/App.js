import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import LogIn from "./login";
import SignUp from "./signup";
import ResultPage from "./pages/ResultPage";


function App() {
  return  <Router>
    <div>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/login" element = {<LogIn/>}/>
      <Route path = "/signup" element = {<SignUp/>}/>
      <Route path = "/results" element = {<ResultPage/>}/>
    </Routes>
  </div>
  </Router>
}

export default App;
