import React from "react"

const Items = ({img,description,title,precio})=>{
    return(
        <div>
            <div>
                <img src={img} alt="Producto"/>
            </div>
            <div>
                <h3>
                    <a href="#">{title}</a>
                </h3>
                <div>{description}</div>
                <div>
                    <span>{precio}</span>
                </div>
            </div>
        </div>
    )

}
export default Items