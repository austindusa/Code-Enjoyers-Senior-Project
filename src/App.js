import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import "./App.css";
import Home from "./home";
import LogIn from "./login";
import SignUp from "./signup";
import ResultPage from "./pages/ResultPage";
import Bookmarks from "./pages/Bookmarks.jsx";
import ChangePasswordPage from "./pages/ChangePasswordPage.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import SurveyPlanPage from "./components/SurveyPlanPage.jsx";
import SubscriptionServiceInfoPage from "./components/SubscriptionServiceInfoPage.jsx";

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
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/surveyplanpage" element={<SurveyPlanPage />} />
          <Route
            path="/subscription"
            element={<SubscriptionServiceInfoPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
