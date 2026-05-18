import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

function MakeNote({ note, setNote, tagsInput, setTagsInput, createNote }) {
  return (
    <div className="flex flex-col items-center pt-8 gap-2.5">
      <Textarea
        placeholder="Enter your note."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="h-40 w-100 resize-none max-sm:w-70"
      />
      <Input
        placeholder="enter note tags separated with coma e.g, grocery, food"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
      />
      <Button onClick={createNote} className="w-100 max-sm:w-70">
        Create Note
      </Button>
    </div>
  );
}

export default MakeNote;
