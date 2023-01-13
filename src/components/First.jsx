import React from "react";
import { useState } from "react";

const First = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  let index = 2;

  const addNumber = () => {
    setArray([...array, 5]);
  };

  const deleteNumber = () => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
  };

  const editNumber = () => {
    setArray([...array.slice(0, index), 999, ...array.slice(index + 1)]);
  };

  const reverseArray = () => {
    let copy = Object.assign([], array);
    copy.reverse();
    setArray(copy);
  };

  return (
    <div>
      <p>Массив: {array}</p>
      <button onClick={addNumber}>Добавить элемент</button>
      <button onClick={deleteNumber}>Удалить элемент</button>
      <button onClick={editNumber}>Изменить элемент</button>
      <button onClick={reverseArray}>Перевернуть массив</button>
    </div>
  );
};

export default First;
