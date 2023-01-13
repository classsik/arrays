import React from "react";
import { useState } from "react";

const Third = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const changeItem = (item, newValue) => {
    let index = array.indexOf(item);
    setArray([...array.slice(0, index), +newValue, ...array.slice(index + 1)]);
  };

  return (
    <div>
      <p>
        {array} <br />
        Среднее арифмитическое:{" "}
        {array.reduce((a, b) => a + b, 0) / array.length}
      </p>
      {array.map((item) => {
        return (
          <div>
            <input
              type="number"
              value={item}
              onChange={(event) => changeItem(item, event.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Third;
