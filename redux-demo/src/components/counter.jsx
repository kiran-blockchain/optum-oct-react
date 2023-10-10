import { useSelector } from "react-redux"

export const Counter =() =>{
    //subscribing to the store
    const count = useSelector(x=>x.counter);
    console.log(count);
    return (
        <h4>Count {count.count}</h4>
    )
}