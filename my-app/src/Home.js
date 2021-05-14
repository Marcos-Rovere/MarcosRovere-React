import React from "react"
import {Animated} from "react-animated-css"

const Home = () => {
    return (
        <div className="fondoHome">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <h1 className="TituloHome">Mundo Nuevo</h1>
            </Animated>
        </div>
    )
}

export default Home