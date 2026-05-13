import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  filteredNotes,
  deleteNote,
  editNote,
  editId,
  editText,
  setEditText,
  handleKeyDown,
  handleBlur,
  handlePinNotes,
}) {
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
              editId={editId}
              editText={editText}
              setEditText={setEditText}
              handleKeyDown={handleKeyDown}
              handleBlur={handleBlur}
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
