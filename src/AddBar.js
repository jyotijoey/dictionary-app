import React, { useEffect, useState } from 'react';
import "./AddBar.css";
import axios from 'axios';
import Modal from "react-modal";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';


function SearchBar() {
    // to store the value of input as object
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(true)
    const [input, setInput] = useState({
        term:"",
    });

    useEffect(() => {}, [show]);

    function Submit(e){
        // to prevent the page from refreshing and getting redirected to backend
        e.preventDefault();
        // making multiple consoles for debugging purpose
        console.log("13");
        console.log("input",JSON.stringify({term: input.term}));
        // to post data from backend
        axios.post("http://localhost:4000/search",{
            term: input.term
        })
        .then((res)=>{
            if(res.status===200){
                
            };
        });

        setInput({term:""});
        // to load the new list item
        // window.location.reload();
    }

    function Handle(e){
        const newInput={...input}
        newInput[e.target.name]= e.target.value
        setInput(newInput)
        console.log(input);
    }

        return   <>
        <button className="searchBar__mainBtn" onClick={()=> setShow(!show)}><AddIcon /></button>
        <Modal isOpen={show} className="searchBar__modal">
        <button onClick={()=> setShow(!show)}><CloseIcon/></button>
            <form method="post" 
        onSubmit={(e)=> {Submit(e); setShow(!show)} }>
            <h1>Add to dictionary</h1>
            <label>New Word</label>
            <br />
                <input type="text"
                onChange={(e)=> Handle(e)}  
                name="term"
                value={input.term}
                placeholder="Add a new term"
                autoComplete="off"/>
                {/* <button onClick={()=> setShow(!show)} onSubmit={()=> input} type="submit">
            </button> */}
            </form>
        </Modal>

        </>
}

export default SearchBar;
