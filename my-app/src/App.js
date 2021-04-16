import './App.css';
import NavBar from "./navBar/navBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
