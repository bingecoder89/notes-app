import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "./components/theme-provider";

import Header from "./components/Header";
import MakeNote from "./components/MakeNote";
import NotesList from "./components/NotesList";
import Modal from "./components/Modal";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [note, setNote] = useState("");
  const [searchText, setSearchtext] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchtext(e.target.value);
  };

  const createNote = () => {
    if (!note.trim()) return;
    const newNote = {
      id: uuidv4(),
      note: note,
      tags: tagsInput,
      pinned: false,
      createdAt: Date.now(),
    };

    setNotes([...notes, newNote]);
    setNote("");
    setTagsInput("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, text) => {
    setIsModalOpen(true);
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    const updatedNotes = notes.map((note) => {
      return editId === note.id ? { ...note, note: editText } : note;
    });
    setEditId(null);
    setNotes(updatedNotes);
    setIsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
  };

  const handleBlur = saveEdit;

  const handlePinNotes = (id) => {
    const updatedNotes = notes.map((note) => {
      return id === note.id ? { ...note, pinned: !note.pinned } : note;
    });
    const sortedNotes = [...updatedNotes].sort((a, b) => {
      if (a.pinned !== b.pinned) {
        return b.pinned - a.pinned;
      }

      return a.createdAt - b.createdAt;
    });
    setNotes(sortedNotes);
  };

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
      <div>
        <Header searchText={searchText} handleSearch={handleSearch} />
        <div className="flex flex-col items-center">
          <MakeNote
            note={note}
            setNote={setNote}
            tagsInput={tagsInput}
            setTagsInput={setTagsInput}
            createNote={createNote}
          />
          <NotesList
            filteredNotes={filteredNotes}
            searchText={searchText}
            deleteNote={deleteNote}
            editNote={editNote}
            handlePinNotes={handlePinNotes}
          />
        </div>
        {isModalOpen && (
          <Modal
            editText={editText}
            setEditText={setEditText}
            setIsModalOpen={setIsModalOpen}
            saveEdit={saveEdit}
            handleKeyDown={handleKeyDown}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
