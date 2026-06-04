import { createContext, useState } from "react";

export const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [archiveNotes, setArchiveNotes] = useState(
    JSON.parse(localStorage.getItem("archiveNotes")) || [],
  );

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handlePinNotes = (id) => {
    const updatedNotes = notes.map((note) => {
      return id === note.id ? { ...note, pinned: !note.pinned } : note;
    });
    setNotes(updatedNotes);
  };

  const handleArchive = (id, note) => {
    !archiveNotes.includes(note) && setArchiveNotes([...archiveNotes, note]);
    const updatedArchiveNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedArchiveNotes);
  };
  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNote,
        handlePinNotes,
        handleArchive,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
