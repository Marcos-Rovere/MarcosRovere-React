import React from "react"
import Item from "./Item"
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"



const ItemList = ({productos}) =>{
    return (
        <React.Fragment>
        {productos.map((dato)=>
        <div key={dato.id}>
            <Item img={dato.imag} title={dato.title} description={dato.description}precio={dato.precio} stock={dato.stock} id={dato.id}/>
        </div>)}
        </React.Fragment>  
    )
}
export default ItemList