import React from "react"
import accounting from "accounting"
import {makeStyles} from "@material-ui/core"
import {getCarritoTotal} from "../reducer"
import {useStateValue} from "../StateProvider"

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}))

const Total = () =>{
    const [{carrito}, dispatch] = useStateValue()

    const classes = useStyles()
    return(
        <div className={classes.root}>
            <h5>Total de unidades: {carrito?.length}</h5>
            <h5>{accounting.formatMoney(getCarritoTotal(carrito))}</h5>
        </div>
    )
}
export default Total