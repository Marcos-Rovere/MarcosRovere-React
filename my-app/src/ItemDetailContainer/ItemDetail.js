import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({datos}) => {
    return (
        <div key={datos.id} className="container" style={{minHeight:"550px"}}>
            <div className="row">
                <div className="col-md-6">
                <img src={datos.imag} className="img-fluid" alt="Foto" />
                </div>
                <div className="col-md-6 pl-lg-3">
                    <h2>{datos.title}</h2>
                    <h5>Precio: {datos.precio}</h5>
                    <h3>{datos.description}</h3>
                    <button className="buttoComprar">Comprar</button>
                    <button className="buttoInicio"><Link to={`/`} style={{color:"black"}}>Inico</Link></button>
                </div>
                
            </div>

        </div>
    )
}
export default ItemDetail