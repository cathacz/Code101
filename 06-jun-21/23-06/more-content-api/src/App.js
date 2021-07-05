// import { useState } from "react";
import { Store, StoreContext } from "./context";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <StoreContext.Provider value={Store}>
      <h1>Store</h1>

      <ProductList />
      <Cart />
    </StoreContext.Provider>
  );
}

export default App;
