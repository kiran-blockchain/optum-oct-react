import { useDispatch } from "react-redux"
import { increment, reset } from "../store/counterSliceReducer";

export const Increment = () => {
    //call action with the help of dispatch
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={e => {
                dispatch(increment(10))
            }}>Click Me</button>
            <button onClick={e=>{
                dispatch(reset())
            }}>Reset</button>
        </div>
    )
}