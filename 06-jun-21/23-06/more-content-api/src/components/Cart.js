import React, { useState, useContext } from "react";
import { StoreContext } from "../context";
import ProductItem from "./ProductItem";

const Cart = () => {
  const [totalBill, setTotalBill] = useState(0);
  const store = useContext(StoreContext);
  const items = store.data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));
  return (
    <React.Fragment>
      <h3>Your Shopping Cart</h3>
      <div>
        {setTotalBill(store.bill())}
        {totalBill}
      </div>
    </React.Fragment>
  );
};

export default Cart;
