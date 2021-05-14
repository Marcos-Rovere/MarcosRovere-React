import React from "react"
import './navBar.css'
import Logo from "./Logo.png"
import {ShoppingCartOutlined} from "@ant-design/icons"
import {Link, NavLink} from "react-router-dom"

const navBar = () => {
    return (
        <nav>
            <ul>
                <img src={Logo} style={{height:"50px", width:"50px"}}></img>
                <li> <NavLink to={`/categories/${catalogo.category}`}></NavLink>Plantas Exteriores</li>
                <li><NavLink to={`/categories/${catalogo.category}`}></NavLink>Plantas Interiores</li>
                <li>Insumos</li>
                <li>Contacto</li>
                <ShoppingCartOutlined style= {{fontSize: "35px"}}/>
            </ul>
        </nav>
    )
}
export default navBar