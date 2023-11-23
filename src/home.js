import React from 'react';
import NavigationBar from "./components/navigationBar";
import SearchBar from "./components/searchComponent";
import SecondPage from "./components/imageTextBox";
 
function Home() {
    return (
        <div>
            <NavigationBar />
            <SearchBar />
            <SecondPage/>
            
        </div>
    );
};
 
export default Home;