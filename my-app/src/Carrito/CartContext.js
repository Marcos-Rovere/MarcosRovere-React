import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core"
import {useStateValue} from "../StateProvider"
import {actionTypes} from "../reducer"
import Cart from "./Cart"
import Total from "./Total"
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        padding: "2rem",
        minHeight: "500px"
    },
}))



const CartContext = () => {

    const classes = useStyles()
    const [{carrito}, dispatch] = useStateValue()

    const removeItemTotal = () => dispatch({
        type: actionTypes.REMOVE_ITEM_TOTAL,
    })

    function FromRow(){
        return(
            <>
            {carrito?.map((item)=>(
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Cart key={item.id} product={item}img={item.img} title={item.title} description={item.description}precio={item.precio} id={item.id} category={item.categoryId}/>
                </Grid>
            ))}
            </>
        )
    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Elementos comprados
                    </Typography>
                </Grid>
                <Grid item xs={12} sm ={8} md ={9} container spacing={2}>
                    <FromRow />
                </Grid>
                <Grid item xs={12} sm ={4} md ={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total />
                        <Button variant="contained" color="primary">
                            <Link to={`/FormularioCompra`}>
                                COMPRAR
                            </Link>
                        </Button>
                        <br></br>
                        <Button variant="contained" onClick={removeItemTotal}>
                            Eliminar Compra
                        </Button>
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} sm ={4} md ={3}>
                    
                </Grid> */}
            </Grid>
        </div>
    )
}

export default CartContext