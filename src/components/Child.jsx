import { useState, useEffect } from "react";
import GrandChild from "./GrandChild";

function Child({ props }) {
  const [counter, setCounter] = useState(0);

  let infoAboutAuthor = props;
  //displays info about author
  // console.log(infoAboutAuthor);

  useEffect(() => {
    console.log("page has loaded!! yay!!");
  }, []);

  return (
    <>
      {infoAboutAuthor.length === 0 ? (
        <p>წიგნები არ მოიძებნა</p>
      ) : (
        infoAboutAuthor.map((info) => (
          <div key={info.id}>
            <p>name: {info.name}</p>
            <p>author: {info.author}</p>
          </div>
        ))
      )}
      <div>
        <h3>{counter}</h3>
        <button onClick={() => setCounter((prev) => prev + 1)}>add 1</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>remove 1</button>
      </div>
      <div>
        <GrandChild></GrandChild>
      </div>
    </>
  );
}

export default Child;
