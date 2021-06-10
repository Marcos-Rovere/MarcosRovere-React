import React, {useState, useEffect} from "react"
import {getFirestore} from "../Firebase"
import ItemList from "./ItemList"
import {Spinner} from "reactstrap"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "./styleCatalogo.css"
import { useParams } from "react-router"

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const {categoryId} = useParams()
    console.log("la category es", categoryId)

useEffect(()=>{
    const db2 = getFirestore()
    const itemsCollection2 = db2.collection("Items")
    

    if (categoryId === "PlantasInterior"){
        const itemsPlantasInterior = itemsCollection2.where('categoryId','==','Planta Interior')
        itemsPlantasInterior.get()
        .then ((queryItems)=>{
            queryItems.size === 0 && console.log("No hay items")
            const documentos = queryItems.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setDatos(documentos)})
        .catch ((err)=>console.log("el error es ",err)
        )
        console.log("entro en plantas interior")
    }
    else if (categoryId === "PlantasExteriores"){
        const itemsPlantasExteriores = itemsCollection2.where('categoryId','==','Planta Exteriores')
        itemsPlantasExteriores.get()
        .then ((queryItems)=>{
            queryItems.size === 0 && console.log("No hay items")
            const documentos = queryItems.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setDatos(documentos)})
        .catch ((err)=>console.log("el error es ",err)
        )
    }
    else if (categoryId === "Insumos"){
        const itemsPlantasInterior = itemsCollection2.where('categoryId','==','Insumos')
        itemsPlantasInterior.get()
        .then ((queryItems)=>{
            queryItems.size === 0 && console.log("No hay items")
            const documentos = queryItems.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setDatos(documentos)})
        .catch ((err)=>console.log("el error es ",err)
        )
    }
    else {
        console.log("entro en el else")
        itemsCollection2.get()
        .then ((queryItems)=>{
            queryItems.size === 0 && console.log("No hay items")
            const documentos = queryItems.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setDatos(documentos)})
            .catch ((err)=>console.log("el error es ",err)
            )
            .finally(()=>{
                console.log("Finalizado")
            })
    } 
    },[categoryId])
    
    return (
                
                datos.length > 0 ? 
                <ItemList productos={datos} />
                : <Spinner style={{margin:"100px", fontSize:"100px", marginLeft:"500px", height:"120px", width:"120px"}}/>
                
        
        
    )
}
export default ItemListContainer