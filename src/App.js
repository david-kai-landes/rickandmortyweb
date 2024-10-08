import React, { useState, useEffect } from "react";
import "../src/Styling/App.css";
import Filter from "./components/Filter/filter";
import Characters from "./components/Characaters/characters";
import Pages from "./components/Pages/pages";
import SearchBar from "./components/SearchBar/searchBar";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const [search, setSearch] = useState("Morty");

  const [dataFetched, setDataFetched] = useState([]);

  const { info, results } = dataFetched;

  // console.log("wubba lubba dub dub", results);
  let rickAndMortyAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(rickAndMortyAPI).then((rickandmortyRes) =>
        rickandmortyRes.json()
      );
      setDataFetched(data);
      // console.log("wubba lubba dub dub", data);
    })();
  }, [rickAndMortyAPI]);

  // const handleSearch = (value) => {
  //   console.log("Search term:", value);
  //   // You can implement your search logic here
  // };

  return (
    <div className="App">
      <div className="div-title">
        <h1 className="rick-morty-title">Rick And Morty</h1>
      </div>
      <div className="searchBar-mainCont">
        <div className="searchBar-innerCont">
          {/* <SearchBar onSearch={handleSearch} /> */}
          <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />
        </div>
      </div>
      <div className="div-container">
        <div className="div-row">
          <div className="div-column-1">
            <Filter />
          </div>
          <div className="div-charatersContainer">
            <div className="div-column-2">
              <Characters results={results} />
            </div>
          </div>
        </div>
      </div>
      <div className="div-pages">
        <Pages pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

export default App;
