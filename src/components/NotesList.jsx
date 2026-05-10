import React from "react";
import NoteCard from "./NoteCard";

function NotesList({ notes }) {
  return (
    <div>
      {notes.length ? (
        <ul>
          {notes.map((note) => (
            <NoteCard note={note} />
          ))}
        </ul>
      ) : (
        <p>No Notes</p>
      )}
    </div>
  );
}

export default NotesList;
