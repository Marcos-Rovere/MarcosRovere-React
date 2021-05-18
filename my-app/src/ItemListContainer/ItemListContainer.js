import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import FotoCala from "./img/cala.jpg"
import FotoCostilla from "./img/costillaAdam.jpg"
import FotoCroto from "./img/Croto.jpg"
import FotoLengua from "./img/Lengua.png"
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

    useEffect(()=>{
        const promi = new Promise ((resolve,reject)=>{
            const catalogo = [
                {id:1,
                imag:FotoCala,
                title:"Cala",
                description:"Cala de Interiores",
                stock: 5,
                precio:"$900"},
                {id:2,
                imag:FotoCostilla,
                title:"Costilla de Adam",
                description:"Costilla de Adam",
                stock: 5,
                precio:"$800"},
                {id:3,
                imag:FotoCroto,
                title:"Croto",
                description:"Croto de interior",
                stock: 5,
                precio:"$1000"},
                {id:4,
                imag:FotoLengua,
                title:"Lengua de Suegra",
                description:"Lengua de Suegra",
                stock: 5,
                precio:"$600"}
            ];
                setTimeout(()=>{
                    resolve(catalogo)
                },1500)
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
        <div className="container" style={{minHeight:"350px"}}>
            <div className="row">
                <div className="col-lg-3">
                {datos.length > 0 ? 
                <ItemList productos={datos} />
                : <Spinner style={{margin:"100px", fontSize:"100px", marginLeft:"500px", height:"120px", width:"120px"}}/>}
                </div>
            </div>
        </div>
        
    )
}
export default ItemListContainer