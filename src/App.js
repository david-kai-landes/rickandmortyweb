import "../src/App.css";
import Filter from "./components/Filter/filter";
import Characters from "./components/Characaters/characters";

function App() {
  return (
    <div className="App">
      <div className="div-title">
        <h1 className="rick-morty-title">Rick And Morty</h1>
      </div>
      <div className="div-container">
        <div className="div-row">
          <div className="div-column-1">
            <Filter />
          </div>
          <div className="div-column-2">
            <Characters />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
