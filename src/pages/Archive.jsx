import React from "react";
import NotesList from "../components/NotesList";

function Archive({
  conditionalNotes,
  searchText,
  deleteNote,
  editNote,
  handlePinNotes,
  filterTag,
  handleArchive,
}) {
  return (
    <div className="flex flex-col items-center">
      <NotesList
        conditionalNotes={conditionalNotes}
        searchText={searchText}
        deleteNote={deleteNote}
        editNote={editNote}
        handlePinNotes={handlePinNotes}
        filterTag={filterTag}
        handleArchive={handleArchive}
      />
    </div>
  );
}

export default Archive;
