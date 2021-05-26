import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {getFirestore} from "../Firebase"


const ItemDetailContainer = () =>{
    const [datos, setDatos] = useState({})
    const{categoryId} = useParams()

    useEffect(()=>{
        /*const promi = new Promise ((resolve,reject)=>{
            const catalogo = [
                {id:1,
                imag:FotoCala,
                title:"Cala",
                category: "Plantes Interiores",
                description:"Cala de Interiores, la cala mas chica de toda la familia, no se debe exponer al altas temperaturas y mantener el riego dia por medio",
                stock: 5,
                precio:"$900"},
                {id:2,
                imag:FotoCostilla,
                title:"Costilla de Adam",
                category: "Plantes Interiores",
                description:"Costilla de Adam, planta muy amplia de un desarroyo lento, my resistente al sol, requiere un riego medio de 2 dias semanales",
                stock: 5,
                precio:"$800"},
                {id:3,
                imag:FotoCroto,
                title:"Croto",
                description:"El croton de interior, es una planta muy resistente al calor, y la cual requiere de un regado de 2/3 dias semanales",
                category: "Plantes Interiores",
                stock: 5,
                precio:"$1000"},
                {id:4,
                imag:FotoLengua,
                title:"Lengua de Suegra",
                category: "Plantes Interiores",
                description:"Lengua de Suegra, es una planta de rapida reproduccion que no deberia recibir el rayo del sol directo, y requiere poco regado 1/2 dias a la semana",
                stock: 5,
                precio:"$600"}
            ];
                setTimeout(()=>{
                    resolve(catalogo)
                },2000)
        })*/
        const db2 = getFirestore()
        const itemsCollection2 = db2.collection("Items")
            itemsCollection2.get()
        .then ((queryItems)=>{
            const ItemsFirebase = queryItems.docs.map((doc)=>doc.data())
            const ItemFiltrado = ItemsFirebase.where('title' === categoryId)
            setDatos(ItemFiltrado)
        })
        .catch ((err)=>console.log("el error es",err)
        )
        .finally(()=>{
            console.log("Finalizado")
        })
        /*promi.then(dato =>{
            const ItemFiltrado = dato.find(item => item.id == categoryId)
        setDatos(ItemFiltrado)
        })*/
       
    },[categoryId])
    return (
        <>
        <div className ="container">
            <div className="row">
                <ItemDetail datos={datos} />
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer