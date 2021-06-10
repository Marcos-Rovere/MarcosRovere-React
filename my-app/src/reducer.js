export const initialState = {
    carrito: []
}

export const actionTypes = {
    ADD_TO_CARRITO: "ADD_TO_CARRITO",
    REMOVE_ITEM: "REMOVE_ITEM"
}

export const getCarritoTotal = (carrito) =>{
    carrito?.reduce((amount, item)=> item.precio + amount, 0)
}

const reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TO_CARRITO":
        return {
            ...state,
            carrito: [...state.carrito, action.item],
        };
        case "REMOVE_ITEM":
        const index = state.carrito.findIndex((carritoItem => carritoItem.id === action.id))
        let newCarrito = [...state.carrito];
        if (index>=0){
            newCarrito.splice(index, 1)
        } else {console.log("No hay item para borrar")}
        return{
            ...state,
            carrito: newCarrito,
        }
    default: return state;
    }
}
export default reducer