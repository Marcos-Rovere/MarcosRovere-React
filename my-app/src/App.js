import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'
import NavBar from "./navBar/navBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"
import Home from "./Home"
import Footer from "./Footer/Footer"
import Cart from "./Cart"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
        <ItemListContainer />
      </Route>
     <Route exact path = '/Items/:categoryId'>
        <ItemDetailContainer />
      </Route>
      <Router exact path = '/cart'>
        <Cart />
      </Router>
    </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
