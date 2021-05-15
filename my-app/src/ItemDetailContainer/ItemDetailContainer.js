import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import FotoCala from "../ItemListContainer/img/cala.jpg"
import FotoCostilla from "../ItemListContainer/img/costillaAdam.jpg"
import FotoCroto from "../ItemListContainer/img/Croto.jpg"
import FotoLengua from "../ItemListContainer/img/Lengua.png"

const ItemDetailContainer = () =>{
    const [datos, setDatos] = useState({})
    const{id} = useParams()

    useEffect(()=>{
        const promi = new Promise ((resolve,reject)=>{
            const catalogo = [
                {id:1,
                imag:FotoCala,
                title:"Cala",
                category: "Plantes Interiores",
                description:"Cala de Interiores",
                stock: 5,
                precio:"$900"},
                {id:2,
                imag:FotoCostilla,
                title:"Costilla de Adam",
                category: "Plantes Interiores",
                description:"Costilla de Adam",
                stock: 5,
                precio:"$800"},
                {id:3,
                imag:FotoCroto,
                title:"Croto",
                description:"Croto de interior",
                category: "Plantes Interiores",
                stock: 5,
                precio:"$1000"},
                {id:4,
                imag:FotoLengua,
                title:"Lengua de Suegra",
                category: "Plantes Interiores",
                description:"Lengua de Suegra",
                stock: 5,
                precio:"$600"}
            ];
                setTimeout(()=>{
                    resolve(catalogo)
                },2000)
        })
        promi.then(dato =>{
            const ItemFiltrado = dato.filter(item => item.id == id)
        setDatos(ItemFiltrado)
        })
        .catch(()=>{
            console.log("Hubo un Error")
        })
        .finally(()=>{
            console.log("Finalizado")
        })
    },[])


    return (
        <>
        <div className ="container">
            <div className="row">
                <ItemDetail dato={datos} />
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer