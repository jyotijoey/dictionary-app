import React, { useState } from 'react';
import "./AddBar.css";
import axios from 'axios';


function SearchBar() {
    const [input, setInput] = useState({
        term:"",
    });
    function Submit(e){
        e.preventDefault();
        console.log("13");
        console.log(input);
        axios.post("http://localhost:4000/search",{
            term: input.term
        })
        .then((res)=>{
            console.log(res.data);
        });

        setInput({term:""});
        window.location.reload();
    }

    function Handle(e){
        const newInput={...input}
        newInput[e.target.name]= e.target.value
        setInput(newInput)
        console.log(input);
    }

    return (
        
        <form 
        // action="http://localhost:4000/search" 
        method="post" 
        onSubmit={(e)=> Submit(e)}
        className="searchBar">
            <input 
                type="text"
                onChange={(e)=> Handle(e)}  
                name="term"
                value={input.term}
                placeholder="Add a new term"
                autoComplete="off"
            /> 
            <button onSubmit={()=> input} type="submit">
            {/* <SearchIcon className="searchBar__icon"/> */}
            </button>
        </form>
        
    )
}

export default SearchBar;
