import React from "react"
import './navBar.css'
import Logo from "./Logo.png"
import {Link} from "react-router-dom"
import { ShoppingCart } from "@material-ui/icons"
import { Badge, IconButton } from "@material-ui/core"
import {useStateValue} from "../StateProvider"




const NavBar = () => {
    const [{carrito}, dispatch] = useStateValue()
    
    return (
        <nav>
            <ul>
                <img src={Logo} style={{height:"50px", width:"50px"}}></img>
                <li><Link to={`/Categorias/PlantasExteriores`}>Plantas Exteriores</Link></li>
                <li><Link to={`/Categorias/PlantasInterior`}>Plantas Interiores</Link></li>
                <li><Link to={`/Categorias/Insumos`}>Insumos</Link></li>
                <li>Contacto</li>
                <Link to={`/cart/Carrito`}>
                    <IconButton>
                        <Badge badgeContent={carrito?.length} color="secondary">
                            <ShoppingCart fontSize="large" color="primary"/>
                        </Badge>
                    </IconButton>
                </Link>
            </ul>
        </nav>
    )
}
export default NavBar