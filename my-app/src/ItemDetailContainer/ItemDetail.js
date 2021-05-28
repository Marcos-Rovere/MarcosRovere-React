import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({imag, title, description, precio}) => {
    return (
        <div className="container" style={{minHeight:"550px"}}>
            <div className="row">
                <div className="col-md-6">
                <img src={imag} className="img-fluid" alt="Foto" />
                </div>
                <div className="col-md-6 pl-lg-3">
                    <h2>{title}</h2>
                    <p>Precio: {precio}</p>
                    <h3>{description}</h3>
                    <button className="buttoComprar">Comprar</button>
                    <button className="buttoInicio"><Link to={`/`} style={{color:"black"}}>Inico</Link></button>
                </div>
                
            </div>

        </div>
    )
}
export default ItemDetail