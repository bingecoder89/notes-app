import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header";
import MakeNote from "../components/MakeNote";
import NotesList from "../components/NotesList";
import Modal from "../components/Modal";
import FilterChip from "../components/FilterChip";

function Home({ searchText }) {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [noteText, setNoteText] = useState("");
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
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchtext(e.target.value);
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

  const filterTag = (tag) => {
    if (selectedTags.includes(tag)) return;
    setSelectedTags([...selectedTags, tag]);
  };

  const deleteTag = (index) => {
    const updatedTags = selectedTags.filter((tag, idx) => index !== idx);
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

  return (
    <>
      <div className="flex flex-col items-center">
        <MakeNote
          noteText={noteText}
          setNoteText={setNoteText}
          tagsInput={tagsInput}
          setTagsInput={setTagsInput}
          createNote={createNote}
        />
        {selectedTags.length > 0 && (
          <FilterChip
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            deleteTag={deleteTag}
          />
        )}
        <NotesList
          filteredNotes={filteredNotes}
          searchText={searchText}
          deleteNote={deleteNote}
          editNote={editNote}
          handlePinNotes={handlePinNotes}
          filterTag={filterTag}
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
    </>
  );
}

export default Home;
