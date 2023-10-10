import { useContext } from "react"
import { CartContext } from "../../Providers/cartProvider"

export const AddToCart =({item})=>{
    //consume the context and fetch the addItem function
    const {addItem} = useContext(CartContext)
    return(
        <button className="btn btn-primary" onClick={e=>{
            addItem({id:1,...item});
        }}>
            Add To Cart
        </button>
    )
}