
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Container from "./Container";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [item, setItem] = useState([]);

useEffect(() => {
 async function fetchPosts() {
   const response = await axios.get("http://localhost:4000/search");

   setItem(response.data);
   return response;
 }

 fetchPosts();
 
}, []);

  return (
    // using BEM
    <Router>
    <div className="app"> 
    <Switch>
    <Route path={"/"}>
      <SearchBar />
      <Container item={item} />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
