import React from "react";

const ProductInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    const { id, title, author, price } = item;
    return <li key={id}>{title}</li>;
  });
  return <React.Fragment></React.Fragment>;
};
export default ProductInfo;
