import { AddToCart } from "../AddToCart"

export const ProductList = ({ list }) => {
    const buildProducts = () => {
        if (list && list.length > 0) {
            return list.map((item, index) => {
                return (
                    <div className="col-md-4 mt-3">
                        <div class="card" style={{width: "18rem;"}}>
                            <img src={item.images[0]} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">{item.description}</p>
                                    <AddToCart item={item}/>    
                                </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="row">
            {buildProducts()}
        </div>
    )
}