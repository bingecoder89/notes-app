import { createContext, useState } from "react";

export const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [archiveNotes, setArchiveNotes] = useState(
    JSON.parse(localStorage.getItem("archiveNotes")) || [],
  );
  return (
    <NotesContext.Provider
      value={{ notes, setNotes, archiveNotes, setArchiveNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
