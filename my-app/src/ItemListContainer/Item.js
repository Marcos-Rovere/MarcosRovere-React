import React, {useState} from "react"
import { Link } from "react-router-dom";
import "./styleCatalogo.css"
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Items = ({img,description,title,precio,stock,id})=>{
        
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
        <div style={{margin:"20px"}}>
                    <div className="card" style={{textAlign:"center"}}>
                        <img src={img} className="card-img-top" alt="Producto"></img>
                        <div className="card-body">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{description}</p>
                            <h5 className="card-text">{precio}</h5>
                            <p className="card-text">Cantidad Disponible: {StockTotal}</p>
                            <p  className="btn btn-primary"><Link to={`/items/${title}`} style={{color:"black"}}>Descripcion</Link></p>
                            <div className="row compra">
                            <button onClick={Resta} className="btn btn-outline-primary botonStock">- </button>
                            <input class="form-control" style={{width:"45px"}} placeholder={StockComprado}></input>
                            <button onClick={Sumar} className="btn btn-outline-primary">+</button>
                            <button className="buttoComprar">Comprar</button>
                        </div>
                        </div>
                    </div>
        </div>
        </React.Fragment>
    )

}
export default Items


