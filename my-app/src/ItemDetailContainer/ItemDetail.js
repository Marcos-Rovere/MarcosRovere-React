import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import {actionTypes} from "../reducer"
import {useStateValue} from "../StateProvider"

const ItemDetail = ({datos}) => {

    const [{carrito}, dispatch] = useStateValue()

    const addToCarrito = () =>{
        dispatch ({
          type: actionTypes.ADD_TO_CARRITO,
          item: {
            img: datos.img,
            title: datos.title,
            precio: datos.precio,
            stock: datos.stock,
            id: datos.id,
            category: datos.category
          }
        })
      }

    

    return (
        <div className="container" style={{minHeight:"550px", padding:"100px"}}>
            <div className="row">
                <div className="col-md-6">
                <img src={datos.imag} className="img-fluid" alt="Foto"/>
                </div>
                <div className="col-md-6 pl-lg-3">
                    <h2>{datos.title}</h2>
                    <p>Precio: {datos.precio}</p>
                    <h3>{datos.description}</h3>
                    <div className="botones">
                        <button className="buttoComprar" onClick={addToCarrito}>Comprar</button>
                        <button className="buttoInicio"><Link to={`/`} style={{color:"black"}}>Inico</Link></button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
export default ItemDetail