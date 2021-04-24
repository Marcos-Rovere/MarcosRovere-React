import React from "react"

const Items = ({img,description,title,precio})=>{
    return(
        <React.Fragment>
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
        </React.Fragment>
    )

}
export default Items