import { useDispatch, useSelector } from "react-redux"
import { increment, reset } from "../store/counterSliceReducer";

export const Increment = () => {
    //call action with the help of dispatch
    const dispatch = useDispatch();
    const count = useSelector(x=>x.counter);

    return (
        <div>
            <button onClick={e => {
                dispatch(increment(count.count+10))
            }}>Click Me</button>
            <button onClick={e=>{
                dispatch(reset())
            }}>Reset</button>
        </div>
    )
}