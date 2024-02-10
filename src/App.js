import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import LogIn from "./login";
import SignUp from "./signup";
import ResultPage from "./pages/ResultPage";
import Bookmarks from "./pages/Bookmarks.jsx";
import WriteReview from "./components/WriteReview";
import SignInForm from "./components/SignInForm.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
