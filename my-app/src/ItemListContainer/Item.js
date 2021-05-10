import React, {useState} from "react"
import "./styleCatalogo.css"

const Items = ({img,description,title,precio,stock})=>{
        
        const [StockTotal, setStockTotal] = useState(stock);
        const [StockComprado, setStockCompra] = useState (0);
    
        const Sumar = () => {
            if (StockTotal !== 0 & StockComprado > -1){
                setStockCompra (StockComprado + 1)
                setStockTotal (StockTotal - 1)
            }
            
        }
        const Resta = () => {
            if (StockTotal >= 0 & StockComprado > 0){
                setStockCompra (StockComprado - 1)
                setStockTotal (StockTotal + 1)
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
                        <p className = "tituloCatalogo">{title}</p>
                    </h3>
                    <div>{description}</div>
                    <div>
                        <span>{precio}</span>
                    </div>
                    <div><p>Cantidad disponible: {StockTotal}</p></div>
                    <div className="row">
                        <button onClick={Resta} className="btn btn-outline-primary botonStock">- </button>
                        <p>{StockComprado}</p> 
                        <button onClick={Sumar} className="btn btn-outline-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

}
export default Items