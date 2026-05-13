import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

function MakeNote({ note, captureNote, createNote }) {
  return (
    <div className="flex flex-col items-center pt-8">
      <Textarea
        placeholder="Enter your note."
        value={note}
        onChange={captureNote}
        className="h-40 w-100 border-3 border-muted resize-none focus:outline-none focus:ring-0 max-sm:w-70"
      />
      <Button onClick={createNote} className="w-100 max-sm:w-70 mt-2">
        Create Note
      </Button>
    </div>
  );
}

export default MakeNote;
