import React from "react";
import NavigationBar from "./components/navigationBar";
import SearchBar from "./components/searchComponent";
import SecondPage from "./components/imageTextBox";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/config";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <NavigationBar />
      <SearchBar />
      <SecondPage />
    </div>
  );
}

export default Home;
