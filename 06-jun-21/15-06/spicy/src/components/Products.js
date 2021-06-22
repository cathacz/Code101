import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const items = data.map((item) => {
    const { id, title, author } = item;
    return (
      <li key={id}>
        <Link to={`/products/${id}`} />
        <div>
          <h2>{title}</h2>
          {author}
        </div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default Products;
