import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import AddBar from "./AddBar";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from '@material-ui/icons/Search';

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("http://localhost:4000/search");

      setItem(response.data);
      return response;
    }

    fetchPosts();
  }, [item]);

  const filterItems = item.filter((word) => {
    return word.term.toLowerCase().includes(search.toLowerCase());
  });

  return (
    // using BEM
    <div className="app">
      <div className="app__searchBar">
      {clicked?
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        :
        <h2>Jyoti's APP</h2>
      }
        <button onClick={()=> setClicked(!clicked) }>
        {clicked?<CloseIcon className="app__searchIcon"/> : <SearchIcon className="app__searchIcon"/>}
        </button>
      </div>
      <Container item={search === "" ? item : filterItems} />
      <AddBar />
    </div>
  );
}

export default App;
