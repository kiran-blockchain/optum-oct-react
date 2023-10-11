import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Protected = (props) => {
   const auth= useSelector(x=>x.auth)
    if (!auth.loginStatus) {
        return <Navigate to="/" />
    }
    return props.children
}
export default Protected;