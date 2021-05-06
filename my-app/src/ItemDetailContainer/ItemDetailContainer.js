import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import FotoCala from "./img/cala.jpg"
import FotoCostilla from "./img/costillaAdam.jpg"
import FotoCroto from "./img/Croto.jpg"
import FotoLengua from "./img/Lengua.png"

const ItemDetailContainer = () =>{
    const [datos, setDatos] = useState({})
    const{id} = useParams()

    useEffect(()=>{
    const getItem = () => {
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
        .catch(()=>{
            console.log("Hubo un Error")
        })
        .finally(()=>{
            console.log("Finalizado")
        })
    } 
    getItem().then(dato =>{
        const ItemFiltrado = dato.filter(item => item.id == `${id}`)
    setDatos(ItemFiltrado)
    })
    },[])


    return (
        <>
        <div className ="container">
            <div className="row">
                <ItemDetail datos={datos[0]} />
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer