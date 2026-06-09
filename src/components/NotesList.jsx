import React from "react";
import NoteCard from "./NoteCard";

import { RiStickyNoteLine } from "@remixicon/react";
import { RiArchiveStackFill } from "@remixicon/react";

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
      ) : isArchive ? (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1.5 justify-center items-center">
            <RiArchiveStackFill />
            <p>No Archived Notes</p>
          </div>
          <p>Archived notes will appear here</p>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1.5 justify-center items-center">
            <RiStickyNoteLine />
            <p>No Notes Yet</p>
          </div>
          <p>Create your first note to get started.</p>
        </div>
      )}
    </div>
  );
}

export default NotesList;
