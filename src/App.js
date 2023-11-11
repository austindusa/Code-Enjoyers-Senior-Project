import "./App.css";
import SearchBar from "./components/searchComponent";
import SecondPage from "./components/imageTextBox";
import SignUpForm from "./components/SignUpForm";
import MainLayout from "./layout/MainLayout";


function App() {
  return( 

  <MainLayout>
    <SearchBar />
    <SecondPage/>
    <SignUpForm/>
  </MainLayout>

  );
}

export default App;
