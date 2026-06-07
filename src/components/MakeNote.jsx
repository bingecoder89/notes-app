import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

function MakeNote({
  noteText,
  setNoteText,
  tagsInput,
  setTagsInput,
  createNote,
}) {
  return (
    <div className="flex flex-col items-center pt-8 mb-8 gap-3">
      <Textarea
        placeholder="Enter your note."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="h-40 w-100 resize-none max-sm:w-80"
      />
      <Input
        placeholder="enter note tags separated with coma e.g, grocery, food"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
        className="text-[14px] max-sm:text-[12px]"
      />
      <Button onClick={createNote} className="w-100 max-sm:w-80">
        Create Note
      </Button>
    </div>
  );
}

export default MakeNote;
