import React from "react"
import "./styleCatalogo.css"

const Items = ({img,description,title,precio,StockCompra,StockTotal,sumar,restar})=>{
    return(
        <React.Fragment>
        <div>
            <div >
                <img src={img} alt="Producto" className ="ImagenesCatalogo"/>
            </div>
            <div className = "divCatalogo">
                <h3>
                    <a href="#" className = "tituloCatalogo">{title}</a>
                </h3>
                <div>{description}</div>
                <div>
                    <span>{precio}</span>
                </div>
                <div><p>Cantidad disponible {StockTotal}</p></div>
                <div>
                    <button onClick={restar}>-</button>
                    <p>{StockCompra}</p>
                    <button onClick={sumar}>+</button>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

}
export default Items