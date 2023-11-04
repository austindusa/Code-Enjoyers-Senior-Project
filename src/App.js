import "./App.css";
import NavigationBar from "./components/navigationBar";
import SearchBar from "./components/searchComponent";
import SecondPage from "./components/imageTextBox";
import SignUpForm from "./components/SignUpForm";


function App() {
  return <div>
    <NavigationBar />
    <SearchBar />
    <SecondPage/>
    <SignUpForm/>
  </div>;
}

export default App;
