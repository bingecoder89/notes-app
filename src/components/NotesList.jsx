import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  filteredNotes,
  searchText,
  deleteNote,
  editNote,
  handlePinNotes,
  filterTag,
}) {
  return (
    <div>
      {filteredNotes.length ? (
        <ul>
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              searchText={searchText}
              deleteNote={deleteNote}
              editNote={editNote}
              handlePinNotes={handlePinNotes}
              filterTag={filterTag}
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
