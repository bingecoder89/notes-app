import React from "react";
import NoteCard from "./NoteCard";

function NotesList({ filteredNotes, deleteNote, editNote, handlePinNotes }) {
  return (
    <div>
      {filteredNotes.length ? (
        <ul>
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              editNote={editNote}
              handlePinNotes={handlePinNotes}
            />
          ))}
        </ul>
      ) : (
        <p>No Notes</p>
      )}
    </div>
  );
}

export default NotesList;
