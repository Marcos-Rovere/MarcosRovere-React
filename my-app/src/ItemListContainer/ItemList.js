import React from "react"
import Item from "./Item"

const ItemList = (productos) =>{
    return (
        <>
        <div>Catalogo</div>
        {productos.map((dato)=>
        <div key={dato.id}>
            <Item img={dato.imag} title={dato.title} description={dato.description}precio={dato.precio}/>
        </div>)}
        </>  
    )
}
export default ItemList