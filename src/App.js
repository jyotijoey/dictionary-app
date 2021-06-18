import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import AddBar from "./AddBar";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  // to fetch the value of list items from backend
  useEffect(() => {
    // using async and await to wait for the data tobe fetched and not leave the stack before the work is done
    async function fetchPosts() {
      const response = await axios.get("https://fast-island-34255.herokuapp.com/search");
      // storing the value into item
      setItem(response.data);
      return response;
    }

    fetchPosts();
  }, [item]);

  // to find the search term in the list
  const filterItems = item.filter((word) => {
    return word.term.toLowerCase().includes(search.toLowerCase());
  });

  return (
    // using BEM
    <div className="app">
      <div className="app__searchBar">
        {/* conditionally displaying the input button */}
        {clicked ? (
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <h2>Jyoti's APP</h2>
        )}

        {/* changing the button conditionally */}
        <button onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <CloseIcon className="app__searchIcon" />
          ) : (
            <SearchIcon className="app__searchIcon" />
          )}
        </button>
      </div>
      {/* search functionality */}
      <Container item={search === "" ? item : filterItems} />
      <AddBar />
    </div>
  );
}

export default App;
