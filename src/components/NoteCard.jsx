import React from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import { RiEdit2Line } from "@remixicon/react";
import { RiStarLine } from "@remixicon/react";
import { RiStarFill } from "@remixicon/react";

function NoteCard({ note }) {
  return (
    <li key={note.id}>
      <p>{note.note}</p>
      <RiDeleteBinLine onClick={() => deleteNote(note.id)} />
      <RiEdit2Line onClick={() => editNote(note.id, note.note)} />
      {note.pinned ? (
        <RiStarFill onClick={() => handlePinNotes(note.id)} />
      ) : (
        <RiStarLine onClick={() => handlePinNotes(note.id)} />
      )}
    </li>
  );
}

export default NoteCard;
