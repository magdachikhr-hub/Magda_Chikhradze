import React from "react";
import { useParams } from "react-router-dom";
function Product() {
  const { id } = useParams("/product/:id");
  console.log(id);
  return <div>the items id is - {id}</div>;
}

export default Product;
