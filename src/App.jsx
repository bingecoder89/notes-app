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

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const captureNote = (e) => {
    setNote(e.target.value);
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

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-background text-foreground">
        <Header />
        <div className="flex flex-col items-center">
          <MakeNote
            note={note}
            captureNote={captureNote}
            createNote={createNote}
          />
          <NotesList notes={notes} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
