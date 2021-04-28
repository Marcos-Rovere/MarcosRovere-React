import React, {useState} from "react"
import Item from "./Item"
import { useState } from "react"

const contadorStock = ({stockTotal})=>{
    const [stockTotal, setStockTotal] = useState(stockTotal);
    const [stockCompra, setStockCompra] = useState (0);

    const Sumar = () => {
        if (stockTotal !== 0){
            console.log("Suma")
            setStockCompra (StockCompra + 1)
            setStockTotal (StockTotal - 1)
        }
    }

    const Resta = () => {
        if (stockTotal !== 0){
            console.log("Resta")
            setStockCompra (StockCompra - 1)
            setStockTotal (StockTotal + 1)
        }
    }

    return (
        <Item stockTotal={stockTotal} StockCompra={StockCompra} sumar={Sumar} restar={Resta} />
    )
}

export default contadorStock
