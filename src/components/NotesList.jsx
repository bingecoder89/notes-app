import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  conditionalNotes,
  editNote,
  searchText,
  deleteArchiveNote,
  filterTag,
  handleUnArchive,
  isArchive,
}) {
  return (
    <div>
      {conditionalNotes.length > 0 ? (
        <ul>
          {conditionalNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              editNote={editNote}
              searchText={searchText}
              deleteArchiveNote={deleteArchiveNote}
              filterTag={filterTag}
              handleUnArchive={handleUnArchive}
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
