import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "./components/theme-provider";

import Header from "./components/Header";
import MakeNote from "./components/MakeNote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [note, setNote] = useState("");
  const [searchText, setSearchtext] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const captureNote = (e) => {
    setNote(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchtext(e.target.value);
  };

  const createNote = () => {
    if (!note.trim()) return;
    const newNote = {
      id: uuidv4(),
      note: note,
      pinned: false,
      createdAt: Date.now(),
    };

    setNotes([...notes, newNote]);
    setNote("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    const updatedNotes = notes.map((note) => {
      return editId === note.id ? { ...note, note: editText } : note;
    });
    setEditId(null);
    setNotes(updatedNotes);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
  };

  const handleBlur = saveEdit;

  const filteredNotes = notes.filter((note) => {
    if (!debouncedSearch.trim()) return true;
    return note.note.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-background text-foreground">
        <Header searchText={searchText} handleSearch={handleSearch} />
        <div className="flex flex-col items-center">
          <MakeNote
            note={note}
            captureNote={captureNote}
            createNote={createNote}
          />
          <NotesList
            filteredNotes={filteredNotes}
            deleteNote={deleteNote}
            editNote={editNote}
            editId={editId}
            editText={editText}
            setEditText={setEditText}
            handleKeyDown={handleKeyDown}
            handleBlur={handleBlur}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
