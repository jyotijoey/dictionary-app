import React, { useState } from 'react';
import "./AddBar.css";
import axios from 'axios';


function SearchBar() {
    // to store the value of input as object
    const [input, setInput] = useState({
        term:"",
    });
    function Submit(e){
        // to prevent the page from refreshing and getting redirected to backend
        e.preventDefault();
        // making multiple consoles for debugging purpose
        console.log("13");
        console.log(input);
        // to post data from backend
        axios.post("http://localhost:4000/search",{
            term: input.term
        })
        .then((res)=>{
            console.log(res.data);
        });

        setInput({term:""});
        // to load the new list item
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
            </button>
        </form>
        
    )
}

export default SearchBar;
