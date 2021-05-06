import React from "react";

const ItemDetail = ({datos}) => {
    return (
        <div key={datos.id} className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={datos.imag} className="img-fluid" alt="Foto" />
                </div>
                <div className="col-md-6 pl-lg-3">
                    <h2>{datos.title}</h2>
                    <h5>Precio: $ {datos.precio}</h5>
                    <h3>{datos.description}</h3>

                </div>
            </div>

        </div>
    )
}
export default ItemDetail