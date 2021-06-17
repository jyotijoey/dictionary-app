import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    // const [input, setInput] = useState("");
    return (
        
        <form 
        action="http://localhost:4000/search" 
        method="post" 
        onSubmit={()=> this.history.push("/")}
        className="searchBar">
            <input 
                type="text"
                onChange={(e)=> console.log(e.target.value)}  
                name="term"
            /> 
            {/* <input type="text" name="xyz" /> */}
            <button type="submit"><SearchIcon className="searchBar__icon"/></button>
        </form>
        
    )
}

export default SearchBar;
