import React, { useState } from "react";
import styles from "./bookmarkToggle.module.css";
import { Link, useNavigate } from "react-router-dom";

function BookmarkToggle() {

    const [isUserSignedIn, setUserSignedIn] = useState(false);
    const [BookmarksText, setTextBookmarks] = useState(false);
    const navigate = useNavigate();
    
    const checkUserSignIn = () => {
        return isUserSignedIn;
      };

    const handleBookmarksClick = () => {
        if (checkUserSignIn()) {
            setTextBookmarks(true);
        } else {
            redirectToLoginPage();
      }}

    const redirectToLoginPage = () => {
        navigate("/login");
    };

    return(
        <div className={styles.container}>
            <Link to="/resultpage" className={styles.searchResultsText}>Search Results</Link>
            {BookmarksText ? (
                <Link to="/bookmarks" className={styles.bookmarkText}>Bookmarks</Link>
            ) : (
                <Link to = "/login" onClick={handleBookmarksClick} className={styles.bookmarkText}>Bookmarks</Link>
            )}
        </div>
    )  
}

export default BookmarkToggle;