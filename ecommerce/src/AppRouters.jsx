import { Route, Routes } from "react-router"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Products } from "./pages/Products"
import Protected from "./components/Protected"
import { Cart } from "./pages/Cart"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/products" element={
                <Protected>
                    <Products />
                </Protected>}></Route>
            <Route path="/cart" element={
                <Protected>
                    <Cart />
                </Protected>}>
            </Route>
            <Route path="*" element={<Login />}></Route>
        </Routes>
    )
}