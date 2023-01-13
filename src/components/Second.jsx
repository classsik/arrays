import React from "react";
import { useState } from "react";

const Second = () => {
  const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    setNotes([...notes, input]);
    setInput("");
  };

  const removeItem = (item) => {
    let copy = Object.assign([], notes);
    let index = copy.indexOf(item);
    copy.splice(index, 1);
    setNotes(copy);
  };

  return (
    <div>
      <ul>
        {notes.map((item) => (
          <li>
            {item} <button onClick={() => removeItem(item)}>Удалить</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onBlur={addItem}
      />
    </div>
  );
};

export default Second;
