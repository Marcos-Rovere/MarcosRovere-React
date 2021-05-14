import React, {useState} from "react"
import { Link } from "react-router-dom";
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
        <div className="container" style={{margin:"20px"}}>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card" style={{textAlign:"center"}}>
                        <img src={img} className="card-img-top" alt="Producto"></img>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Cantidad Disponible: {StockTotal}</p>
                            <p  className="btn btn-primary"><Link to={`/item/${datos.id}`}></Link>Descripcion</p>
                            <div className="row compra">
                            <button onClick={Resta} className="btn btn-outline-primary botonStock">- </button>
                            <input class="form-control" style={{width:"45px"}} placeholder={StockComprado}></input>
                            <button onClick={Sumar} className="btn btn-outline-primary">+</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

}
export default Items


