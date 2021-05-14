import React from "react"
import "./footer.css"
import {FacebookFilled,InstagramOutlined,GoogleOutlined,WhatsAppOutlined} from "@ant-design/icons"

const Footer = () => {
    return (
    <div className="footer">
        <div className="container">
               <div className="redes-container">
                <ul>
                  <li><a href="#" className="facebook"><FacebookFilled style={{fontSize: "35px"}}/></a></li>
                  <li><a href="#" className="instagram"><InstagramOutlined style={{fontSize: "35px"}}/></a></li>
                  <li><a href="#" className="email"><GoogleOutlined style={{fontSize: "35px"}} /></a></li>
                  <li><a href="#" className="whatapp"><WhatsAppOutlined style={{fontSize: "35px"}}/></a></li>
                 </ul>
                </div>
        </div>
    </div>
    )
}

export default Footer