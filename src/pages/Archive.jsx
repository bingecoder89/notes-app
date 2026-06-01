import React from "react";
import NotesList from "../components/NotesList";

function Archive({
  conditionalNotes,
  searchText,
  deleteArchiveNote,
  // editNote,
  // handlePinNotes,
  filterTag,
  handleArchive,
  handleUnArchive,
  isArchive,
}) {
  return (
    <div className="flex flex-col items-center">
      <NotesList
        conditionalNotes={conditionalNotes}
        searchText={searchText}
        deleteArchiveNote={deleteArchiveNote}
        // editNote={editNote}
        // handlePinNotes={handlePinNotes}
        filterTag={filterTag}
        handleArchive={handleArchive}
        handleUnArchive={handleUnArchive}
        isArchive={isArchive}
      />
    </div>
  );
}

export default Archive;
