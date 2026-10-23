import React from "react";
import useFetch from "../hooks/useFetch";

function Footer() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
  return <div>Footer</div>;
}

export default Footer;
