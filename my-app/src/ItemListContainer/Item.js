import React, {useState} from "react"
import "./styleCatalogo.css"

const Items = ({img,description,title,precio,stock})=>{
        
        const [stockTotal, setStockTotal] = useState(stock);
        const [stockComprado, setStockCompra] = useState (0);
    
        const Sumar = () => {
            if (stockTotal === 0){
                console.log("Suma")
            }
            else{
                setStockCompra (stockComprado + 1)
                setStockTotal (stockTotal - 1)
            }
        }
        const Resta = () => {
            if (stockTotal === 0){
                console.log("Resta")
            }
            else {
                setStockCompra (stockComprado - 1)
                setStockTotal (stockTotal + 1)
            }
        }
    
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
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
                    <div><p>Cantidad disponible: {stockTotal}</p></div>
                    <div className="row">
                        <button onClick={Resta} className="btn btn-outline-primary botonStock">- </button>
                        <p>{stockComprado}</p> 
                        <button onClick={Sumar} className="btn btn-outline-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

}
export default Items