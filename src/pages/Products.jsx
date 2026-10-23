import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const productsList = [
    { id: 1, name: "shoes" },
    { id: 2, name: "t-shirt" },
    { id: 3, name: "pants" },
    { id: 4, name: "water" },
  ];

  return (
    <>
      {productsList.map((prod) => (
        <Link to={`/Product/${prod.id}`} key={prod.id}>
          <div>{prod.name}</div>
        </Link>
      ))}
    </>
  );
}

export default Products;
