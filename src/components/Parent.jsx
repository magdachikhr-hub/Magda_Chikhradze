import React from "react";
import Child from "./Child";

function Parent() {
  let infoAboutAuthor = [
    { id: "23", name: "Wuthering Heights", author: "jane doe" },
    { id: "24", name: "The Adventures of Tom Sawyer", author: "john doe" },
    { id: "25", name: "Dracula", author: "ella doe" },
  ];

  return (
    <>
      <Child props={infoAboutAuthor}></Child>
    </>
  );
}

export default Parent;
