import React from "react"
import './navBar.css'
import Logo from "./Logo.png"
const navBar = () => {
    return (
        <nav>
            <ul>
                <img src={Logo} style={{height:"50px", width:"50px"}}></img>
                <li>Plantas Exteriores</li>
                <li>Plantas Interiores</li>
                <li>Insumos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}
export default navBar