import React, {useState, useEffect} from "react"
import {getFirestore} from "../Firebase"
import ItemList from "./ItemList"
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styleCatalogo.css"

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

useEffect(()=>{
    const db2 = getFirestore()
    const itemsCollection2 = db2.collection("Items")
    itemsCollection2.get()
        .then ((queryItems)=>{
            queryItems.size === 0 && console.log("No hay items")
            const documentos = queryItems.docs.map((doc)=>doc.data())
            setDatos(documentos)
    })
        .catch ((err)=>console.log("el error es",err)
        )
        .finally(()=>{
            console.log("Finalizado")
        })
    },[])
    
    return (
        <div className="DivCards" style={{minHeight:"350px"}}>
                <div style={{width:"300px"}}>
                {datos.length > 0 ? 
                <ItemList productos={datos} />
                : <Spinner style={{margin:"100px", fontSize:"100px", marginLeft:"500px", height:"120px", width:"120px"}}/>}
                </div>
        </div>
        
    )
}
export default ItemListContainer