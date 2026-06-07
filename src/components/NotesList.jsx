import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  conditionalNotes,
  editNote,
  searchText,
  filterTag,
  isArchive,
}) {
  return (
    <div className="mb-8">
      {conditionalNotes.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conditionalNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              editNote={editNote}
              searchText={searchText}
              filterTag={filterTag}
              isArchive={isArchive}
            />
          ))}
        </ul>
      ) : (
        <p>{isArchive ? "No Archive Notes!" : "No Notes!"}</p>
      )}
    </div>
  );
}

export default NotesList;
