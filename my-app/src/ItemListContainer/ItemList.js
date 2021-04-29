import React from "react"
import Item from "./Item"



const ItemList = ({productos}) =>{
    return (
        <React.Fragment>
        <div>Catalogo</div>
        {productos.map((dato)=>
        <div key={dato.id}>
            <Item img={dato.imag} title={dato.title} description={dato.description}precio={dato.precio} stock={dato.stock}/>
        </div>)}
        </React.Fragment>  
    )
}
export default ItemList