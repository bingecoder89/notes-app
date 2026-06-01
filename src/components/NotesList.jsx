import React from "react";
import NoteCard from "./NoteCard";

function NotesList({
  conditionalNotes,
  searchText,
  deleteNote,
  deleteArchiveNote,
  editNote,
  handlePinNotes,
  filterTag,
  handleArchive,
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
              searchText={searchText}
              deleteNote={deleteNote}
              deleteArchiveNote={deleteArchiveNote}
              editNote={editNote}
              handlePinNotes={handlePinNotes}
              filterTag={filterTag}
              handleArchive={handleArchive}
              handleUnArchive={handleUnArchive}
              isArchive={isArchive}
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
