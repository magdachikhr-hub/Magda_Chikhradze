import React from "react";
import useFetch from "../hooks/useFetch";
import { useMemo, useCallback } from "react";
import { useState } from "react";

function Footer() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  //useMemo იმახსოვრებს ლუწი რიცხვების გაფილტვრის შედეგს, თავიდან იფილტრება როდესაც [numbers] შეიცვლება
  const evNumbers = useMemo(() => {
    return numbers.filter((number) => number % 2 === 0);
  }, [numbers]);

  // useCallback იმახსოვრებს ფუნქციას, რომელიც ღილაკზე დაჭერისას მასივს ახალ რიცხვს ამატებს.
  const addNumber = useCallback(() => {
    setNumbers((prevnum) => [...prevnum, prevnum.length + 1]);
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <h3>all nums</h3>
          {numbers.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
          <h3 style={{ marginLeft: "15px" }}>even</h3>
          {evNumbers.map((number) => (
            <p key={number}>{number}</p>
          ))}
        </div>
        <button onClick={addNumber}>add</button>
      </div>
    </>
  );
}

export default Footer;
