import React from "react";

function Child({ props }) {
  let infoAboutAuthor = props;

  console.log(infoAboutAuthor);

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
    </>
  );
}

export default Child;
