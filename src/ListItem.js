import React, { useEffect } from 'react';
import "./ListItem.css";
import Headers from "./Credentials";
function ListItem() {
    
    useEffect(() => {
        apiCall();
    }, [])
    const apiCall=() => {
        

        fetch("https://od-api.oxforddictionaries.com/api/v2/entries/en-us/apple", {
        headers:Headers
        })
        .then((response)=> {
            return response.json();
        })
        .then((myJson)=>{
            console.log(myJson);
        });
    }
    return (
        <div className="listItem">
            <h1>list item</h1>
        </div>
    )
}

export default ListItem;
