import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router";
import { useContext } from "react";
import { NotesContext } from "./context/NotesContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

function App() {
  const { notes, setNotes, archiveNotes, setArchiveNotes } =
    useContext(NotesContext);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagsInput, setTagsInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const createNote = () => {
    if (!noteText.trim()) return;
    const newNote = {
      id: uuidv4(),
      note: noteText,
      tags: tagsInput,
      pinned: false,
      createdAt: Date.now(),
    };

    setNotes([...notes, newNote]);
    setNoteText("");
    setTagsInput("");
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

  // const handleBlur = saveEdit;

  const filterTag = (tag) => {
    if (selectedTags.includes(tag)) return;
    setSelectedTags([...selectedTags, tag]);
  };

  const deleteTag = (index) => {
    const updatedTags = selectedTags.filter((_, idx) => index !== idx);
    setSelectedTags(updatedTags);
  };

  let filteredNotes = notes.filter((note) => {
    if (!debouncedSearch.trim()) return true;
    return note.note.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  selectedTags.length > 0 &&
    (filteredNotes = filteredNotes.filter((note) => {
      return selectedTags.some((tag) => note.tags.includes(tag));
    }));

  filteredNotes = filteredNotes.sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return b.pinned - a.pinned;
    }

    return b.createdAt - a.createdAt;
  });

  let sortedArchiveNotes = [...archiveNotes].sort((a, b) => {
    if (a.createdAt !== b.createdAt) {
      return b.createdAt - a.createdAt;
    }

    return a.createdAt - b.createdAt;
  });
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Routes>
          <Route
            element={
              <Layout searchText={searchText} handleSearch={handleSearch} />
            }
          >
            <Route
              path="/"
              element={
                <Home
                  noteText={noteText}
                  setNoteText={setNoteText}
                  tagsInput={tagsInput}
                  setTagsInput={setTagsInput}
                  createNote={createNote}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  deleteTag={deleteTag}
                  conditionalNotes={filteredNotes}
                  editNote={editNote}
                  searchText={searchText}
                  filterTag={filterTag}
                  editText={editText}
                  setEditText={setEditText}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  saveEdit={saveEdit}
                  handleKeyDown={handleKeyDown}
                  isArchive={false}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <Archive
                  conditionalNotes={sortedArchiveNotes}
                  searchText={searchText}
                  filterTag={filterTag}
                  isArchive={true}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
