import React from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import { RiEdit2Line } from "@remixicon/react";
import { RiStarLine } from "@remixicon/react";
import { RiStarFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NoteCard({
  note,
  searchText,
  deleteNote,
  editNote,
  handlePinNotes,
}) {
  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp));

    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const day = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return `${time} ${day}`;
  };

  const noteText = note.note;
  const position = noteText.toLowerCase().indexOf(searchText.toLowerCase());
  const beforeMatch = noteText.slice(0, position);
  const match = noteText.slice(position, position + searchText.length);
  const afterMatch = noteText.slice(position + searchText.length);

  const highlightedText =
    beforeMatch + `<span className="bg-amber-200">${match}</span>` + afterMatch;

  return (
    <Card className="w-100 mt-2.5">
      <CardHeader>
        <CardTitle className="text-xs">EveryNote</CardTitle>
        <CardDescription className="text-xs">
          created at: {formatDate(note.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="line-clamp-3 cursor-pointer"
          onClick={() => editNote(note.id, note.note)}
        >
          {position !== -1 && searchText ? (
            <Markdown rehypePlugins={[rehypeRaw]}>{highlightedText}</Markdown>
          ) : (
            <Markdown rehypePlugins={[rehypeRaw]}>{noteText}</Markdown>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handlePinNotes(note.id)} className="w-20">
          {note.pinned ? <RiStarFill /> : <RiStarLine />}
        </Button>
        <Button onClick={() => editNote(note.id, note.note)} className="w-20">
          <RiEdit2Line />
        </Button>
        <Button onClick={() => deleteNote(note.id)} className="w-20">
          <RiDeleteBinLine />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NoteCard;
