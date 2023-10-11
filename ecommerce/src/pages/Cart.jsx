import { useSelector } from "react-redux"

export const Cart = ()=>{
    const cart = useSelector(x=>x.products); 
    const buildCart =()=>{
        return(cart.cartItems.map((item,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                </tr>
            )
        }))
    }
    
    return(
        <table className="table table-striped">
            <thead>
                <th>S.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </thead>
            <tbody>
                {buildCart()}
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td>{cart.total}</td>
                </tr>
            </tbody>
        </table>
    )
}