import React, { useEffect } from "react"
import './navBar.css'
import Logo from "./Logo.png"
import {ShoppingCartOutlined} from "@ant-design/icons"
import {Link, useParams} from "react-router-dom"
import {getFirestore} from "../Firebase"




const NavBar = () => {
    
    return (
        <nav>
            <ul>
                <img src={Logo} style={{height:"50px", width:"50px"}}></img>
                <li><Link to={`/Categorias/PlantasExteriores`}>Plantas Exteriores</Link></li>
                <li><Link to={`/Categorias/PlantasInterior`}>Plantas Interiores</Link></li>
                <li><Link to={`/Categorias/Insumos`}>Insumos</Link></li>
                <li>Contacto</li>
                <ShoppingCartOutlined style= {{fontSize: "35px"}}/><Link to={`/cart`}></Link>
            </ul>
        </nav>
    )
}
export default NavBar