import React from "react";
import { RiDeleteBinLine } from "@remixicon/react";

function NoteCard({ note, deleteNote }) {
  return (
    <li key={note.id}>
      <p>{note.note}</p>
      <RiDeleteBinLine onClick={() => deleteNote(note.id)} />
    </li>
  );
}

export default NoteCard;
