import React from "react";
import NoteCard from "./NoteCard";

function NotesList({ filteredNotes }) {
  return (
    <div>
      {filteredNotes.length ? (
        <ul>
          {filteredNotes.map((note) => (
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
