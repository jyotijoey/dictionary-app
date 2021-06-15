import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <>
        <div className="searchBar">
            <input type="text" /> 
            <SearchIcon className="searchBar__icon"/>
        </div>
        
        </>
    )
}

export default SearchBar;
