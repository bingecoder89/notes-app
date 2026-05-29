import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  conditionalNotes,
  searchText,
  deleteNote,
  editNote,
  handlePinNotes,
  filterTag,
  handleArchive,
}) {
  return (
    <div>
      {conditionalNotes.length > 0 ? (
        <ul>
          {conditionalNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              searchText={searchText}
              deleteNote={deleteNote}
              editNote={editNote}
              handlePinNotes={handlePinNotes}
              filterTag={filterTag}
              handleArchive={handleArchive}
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
