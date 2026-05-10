import React from "react";
import { RiAddLargeFill } from "@remixicon/react";

function MakeNote({ note, captureNote, createNote }) {
  return (
    <div className="relative">
      <textarea
        placeholder="write your note..."
        className="text-lg min-w-1/3 min-h-52 rounded-xs my-7 px-2 border-2 border-gray-400 resize-none outline-none"
        value={note}
        onChange={captureNote}
      ></textarea>
      <button
        className="bg-background text-foreground cursor-pointer absolute bottom-5 right-2.5 rounded-full"
        onClick={createNote}
      >
        <RiAddLargeFill size={30} />
      </button>
    </div>
  );
}

export default MakeNote;
