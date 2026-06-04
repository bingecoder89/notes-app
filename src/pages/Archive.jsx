import React from "react";
import NotesList from "../components/NotesList";

function Archive({ conditionalNotes, searchText, filterTag, isArchive }) {
  return (
    <div className="flex flex-col items-center">
      <NotesList
        conditionalNotes={conditionalNotes}
        searchText={searchText}
        filterTag={filterTag}
        isArchive={isArchive}
      />
    </div>
  );
}

export default Archive;
