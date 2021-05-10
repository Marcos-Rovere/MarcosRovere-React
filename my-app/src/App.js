import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./navBar/navBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"
import Home from "./Home"
import Footer from "./Footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/'>
        <Home />
        <ItemListContainer />
      </Route>
     <Route path = '/Item/:id'>
        <ItemDetailContainer />
      </Route>
    </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
