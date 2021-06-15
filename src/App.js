import './App.css';
import Container from "./Container";
import SearchBar from "./SearchBar";

function App() {
  return (
    // using BEM
    <div className="app"> 
      <SearchBar />
      <Container />
    </div>
  );
}

export default App;
