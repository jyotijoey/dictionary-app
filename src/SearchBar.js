import React, { useState } from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    const [input, setInput] = useState("");
    return (
        <form action="http://localhost:4000/search" method="post" className="searchBar">
            <input type="text" onChange={(e)=> {setInput(e.target.value); console.log(input)}} value={input}/> 
            <button type="submit" onClick={()=> console.log(input)}><SearchIcon className="searchBar__icon"/></button>
        </form>
    )
}

export default SearchBar;
