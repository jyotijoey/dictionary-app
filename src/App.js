import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Container from "./Container";
import AddBar from "./AddBar";
import SearchBar from "./SearchBar"

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
    <div className="app">
      <SearchBar /> 
      <Container item={item} />
      <AddBar />
    </div>
  );
}

export default App;
