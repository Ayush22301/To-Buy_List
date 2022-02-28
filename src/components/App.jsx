import React, { useState } from "react";
import RandomWord from "./RandomWord";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  function addNote(event) {
    setNotes((prevNotes) => {
      return [...prevNotes, RandomWord()];
    });
    setNote("");
    event.preventDefault();
  }
  return (
    <div className="note">
      <div>
        <input
          name="Note"
          type="text"
          placeholder="Search"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <button onClick={addNote}>+</button>
      </div>
      <div>
        {notes
          .filter((elment) => elment.includes(note) || note === "")
          .map((elt, index) => (
            <p key={index}>
              {elt}
              <hr />
            </p>
          ))}
      </div>
    </div>
  );
}

export default App;
