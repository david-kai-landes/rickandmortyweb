import React, { useState, useEffect } from "react";
import "../src/Styling/App.css";
import Filter from "./components/Filter/filter";
import Characters from "./components/Characaters/characters";
import Pages from "./components/Pages/pages";
import SearchBar from "./components/SearchBar/searchBar";

function App() {
  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [dataFetched, setDataFetched] = useState([]);

  let { info, results } = dataFetched;

  //  ("wubba lubba dub dub", results);
  let rickAndMortyAPI = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(rickAndMortyAPI).then((rickandmortyRes) =>
          rickandmortyRes.json()
        );
        setDataFetched(data);
        // console.log("wubba lubba dub dub", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [rickAndMortyAPI, gender]);

  return (
    <div className="App">
      <div className="div-title">
        <h1 className="rick-morty-title">Rick And Morty</h1>
      </div>
      <div className="searchBar-mainCont">
        <div className="searchBar-innerCont">
          <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />
        </div>
      </div>
      <div className="div-container">
        <div className="div-row">
          <div className="app-filterContainer">
            <Filter
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus}
              setPageNumber={setPageNumber}
            />
          </div>
          <div className="div-charatersContainer">
            <div className="div-column-2">
              <Characters results={results} />
            </div>
          </div>
        </div>
      </div>
      <div className="div-pages">
        <Pages
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
}

export default App;
