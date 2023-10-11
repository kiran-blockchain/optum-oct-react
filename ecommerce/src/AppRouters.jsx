import { Route, Routes } from "react-router"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"

export const AppRoutes =()=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<Login/>}></Route>
        </Routes>
    )
}