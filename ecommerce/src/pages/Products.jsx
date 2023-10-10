import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/productReducer";
import { ProductList } from "../components/ProductList";

export const Products = () => {
    const productInfo = useSelector(x => x.products);
    console.log(productInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className="row">
           <ProductList list={productInfo.products}/>
        </div>
    )

}