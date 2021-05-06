import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Router} from 'react-router-dom'
import NavBar from "./navBar/navBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Router path='/'>
        <ItemListContainer />
      </Router>
     <Router path = '/Item/:id'>
        <ItemDetailContainer />
      </Router>

      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
