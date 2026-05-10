import React from "react";
import NoteCard from "./NoteCard";

function NotesList({ filteredNotes, deleteNote }) {
  return (
    <div>
      {filteredNotes.length ? (
        <ul>
          {filteredNotes.map((note) => (
            <NoteCard note={note} deleteNote={deleteNote} />
          ))}
        </ul>
      ) : (
        <p>No Notes</p>
      )}
    </div>
  );
}

export default NotesList;
