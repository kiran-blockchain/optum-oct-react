import { useState } from "react";
import { AddToCart } from "./components/AddToCart";
import ItemList from "./components/CallBackDemo";
import { Header } from "./components/Header";
import { MemoDemo } from "./components/MemoDemo";

import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
import { HeaderConfig } from "./utils/config";
import { CartContext } from "./Providers/cartProvider";
import { Products } from "./pages/Products";

const App = () => {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {

    setItems([...items, item])

  };
 
  return (
    <CartContext.Provider value={{ itemCount: items, 
    addItem: addToCart,
     }}>
      <div>
        <Header headerConfig={HeaderConfig} />
        <Products/>
      </div>
    </CartContext.Provider>)
};

export default App;

