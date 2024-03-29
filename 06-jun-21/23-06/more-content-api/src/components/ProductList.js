import React, { useState, useContext } from "react";
import { StoreContext } from "../context";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const store = useContext(StoreContext);
  //   const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const items = store.data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setTotalBill(store.bill())}>Total bill</button>
        <h6>{totalBill}€</h6>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
