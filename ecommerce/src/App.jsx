import { useState } from "react";
import { AddToCart } from "./components/AddToCart";
import ItemList from "./components/CallBackDemo";
import { Header } from "./components/Header";
import { MemoDemo } from "./components/MemoDemo";

import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
import { HeaderConfig } from "./utils/config";
import { CartContext } from "./Providers/cartProvider";

const App = () => {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {

    setItems([...items, item])

  };
  const removeFromCart = (item) => {
    let existing = items;
    let index = items.findIndex(x => x.id == item.id);
    existing = existing.slice(index, 1);
    setItems(existing);
  }
  return (
    <CartContext.Provider value={{ itemCount: items, 
    addItem: addToCart,
    removeItem:removeFromCart }}>
      <div>
        <Header headerConfig={HeaderConfig} />
        <AddToCart />
      </div>
    </CartContext.Provider>)
};

export default App;

