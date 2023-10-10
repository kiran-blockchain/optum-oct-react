import { createContext } from "react";

export const CartContext = createContext({
    itemCount:0,
    addItem:()=>{},
    removeItem:()=>{}
});