import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {getFirestore} from "../Firebase"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));


const ItemDetailContainer = () =>{
    const classes = useStyles();

    const [datos, setDatos] = useState({})
    const{id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollectionDetail = db.collection("Items").doc(id)
            itemsCollectionDetail.get()
        .then ((queryItemsDetail)=>{
            setDatos({...queryItemsDetail.data(), id:queryItemsDetail.id})
        })
        .catch ((err)=>console.log("el error es",err)
        )
        .finally(()=>{
            console.log("Finalizado")
        })
      
    },[id])
    return (
        <>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <ItemDetail datos={datos} />
            </Grid>
        </Grid>
        </div>
        </>
    )
}

export default ItemDetailContainer


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
          /*promi.then(dato =>{
            const ItemFiltrado = dato.find(item => item.id == categoryId)
        setDatos(ItemFiltrado)
        })*/