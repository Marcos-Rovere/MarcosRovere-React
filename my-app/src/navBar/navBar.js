import React, { useEffect } from "react"
import './navBar.css'
import Logo from "./Logo.png"
import {ShoppingCartOutlined} from "@ant-design/icons"
import {Link, useParams} from "react-router-dom"
import {getFirestore} from "../Firebase"




const NavBar = () => {
    const {prueba} = useParams()
    useEffect (()=>{
        const bd = getFirestore()
        const ItemsDeFirebase = bd.collection("items")
        const ItemPLanInterior = ItemsDeFirebase.where('categoryId','===','Planta Interior' === prueba)
    },[])

    return (
        <nav>
            <ul>
                <img src={Logo} style={{height:"50px", width:"50px"}}></img>
                <li> <Link to={`/categories/Plantes Exteriores`}></Link>Plantas Exteriores</li>
                <li><Link to={`/categories/Plantas Interior`}>Plantas Interiores</Link></li>
                <li>Insumos</li>
                <li>Contacto</li>
                <ShoppingCartOutlined style= {{fontSize: "35px"}}/><Link to={`/cart`}></Link>
            </ul>
        </nav>
    )
}
export default NavBar