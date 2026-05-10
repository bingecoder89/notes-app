import React from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import { RiEdit2Line } from "@remixicon/react";

function NoteCard({
  note,
  deleteNote,
  editNote,
  editId,
  editText,
  setEditText,
  handleKeyDown,
  handleBlur,
}) {
  return (
    <li key={note.id} className="flex gap-1">
      {editId === note.id ? (
        <input
          style={{ border: "2px solid black" }}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p>{note.note}</p>
      )}
      <RiDeleteBinLine onClick={() => deleteNote(note.id)} />
      <RiEdit2Line onClick={() => editNote(note.id, note.note)} />
    </li>
  );
}

export default NoteCard;
