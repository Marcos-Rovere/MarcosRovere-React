import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'
import NavBar from "./navBar/navBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"
import Home from "./Home"
import Footer from "./Footer/Footer"
import CartContext from "./Carrito/CartContext"


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
        <ItemListContainer />
      </Route>
      <Route exact path='/Categorias/:categoryId'>
        <ItemListContainer />
      </Route>
     <Route exact path = '/Items/:id'>
        <ItemDetailContainer />
      </Route>
      <Route path = '/cart/Carrito'>
        <CartContext />
      </Route>
    </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
