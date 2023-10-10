import { useContext } from "react"
import { CartContext } from "../../Providers/cartProvider"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/productReducer"

export const AddToCart =({item})=>{
    //consume the context and fetch the addItem function
    const {addItem} = useContext(CartContext)
    const dispatch = useDispatch()
    return(
        <button className="btn btn-primary" onClick={e=>{
                dispatch(addToCart(item))
        }}>
            Add To Cart
        </button>
    )
}