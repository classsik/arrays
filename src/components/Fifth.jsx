import React from "react";
import { useState } from "react";

const Fifth = () => {
  const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
  const [input, setInput] = useState("");
  const [editItem, setEditItem] = useState(null);

  const startEdit = (index) => {
    setEditItem(index);
    setInput(notes[index]);
  };

  const changeHandler = (event) => {
    setInput(event.target.value);

    if (editItem != null) {
      setNotes([
        ...notes.slice(0, editItem),
        event.target.value,
        ...notes.slice(editItem + 1),
      ]);
    }
  };

  const blurHandler = () => {
    if (editItem == null) {
      setNotes([...notes, input]);
    } else {
      setEditItem(null);
    }
    setInput("");
  };

  return (
    <div>
      <ul>
        {notes.map((item, index) => (
          <li>
            {item}{" "}
            <button onClick={() => startEdit(index)}>Редактировать</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default Fifth;
