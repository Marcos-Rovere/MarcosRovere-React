import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

    useEffect(()=>{
        const promi = new Promise ((resolve,reject)=>{
            const catalogo = [
                {id:1,
                imag:'./img/cala.jpg',
                title:"Cala",
                description:"Cala de Interiores",
                precio:"$900"},
                {id:2,
                imag:'./img/costillaAdam.jpg',
                title:"Cala",
                description:"Costilla de Adam",
                precio:"$800"},
                {id:3,
                imag:'./img/Croto.jpg',
                title:"Cala",
                description:"Croto de interior",
                precio:"$1000"},
                {id:4,
                imag:'./img/Lengua.png',
                title:"Cala",
                description:"Lengua de Suegra",
                precio:"$600"}
            ];
                setTimeout(()=>{
                    resolve(catalogo)
                },2000)
        })
        promi.then((res)=>{
            setDatos(res)
        })
        .catch(()=>{
            console.log("Hubo un Error")
        })
        .finally(()=>{
            console.log("Finalizado")
        })
    },[])
    
    return (
        <ItemList productos={datos}/>
    )
}
export default ItemListContainer