import './App.css';
import NavBar from "./navBar/navBar"

import Items from './ItemListContainer/Item';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Items />
      </header>
    </div>
  );
}

export default App;
