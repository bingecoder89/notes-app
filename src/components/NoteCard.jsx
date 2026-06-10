import React from "react";
import { GoogleGenAI } from "@google/genai";
import { useContext } from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import { RiEdit2Line } from "@remixicon/react";
import { RiStarLine } from "@remixicon/react";
import { RiStarFill } from "@remixicon/react";
import { RiInboxArchiveLine } from "@remixicon/react";
import { RiInboxUnarchiveLine } from "@remixicon/react";
import { RiBardFill } from "@remixicon/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { NotesContext } from "../context/NotesContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Badge } from "@/components/ui/badge";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export function NoteCard({ note, editNote, searchText, filterTag, isArchive }) {
  const {
    deleteNote,
    deleteArchiveNote,
    handlePinNotes,
    handleArchive,
    handleUnArchive,
  } = useContext(NotesContext);
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

  async function summarizeNote(noteText) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: `Summarize this note in simple language:\n\n${noteText}`,
      });

      console.log(response.text);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="w-100 max-sm:w-96">
      <CardHeader>
        <CardTitle className="text-xs">EveryNote</CardTitle>
        <CardDescription className="text-xs">
          created at: {formatDate(note.createdAt)}
        </CardDescription>
        {!note.tags.trim() ? null : (
          <div className="flex flex-wrap items-center gap-1">
            {note.tags.split(",").map((tag, index) => (
              <Badge
                key={index}
                className="cursor-pointer"
                onClick={() => filterTag(tag)}
              >
                {tag.trim()}
              </Badge>
            ))}
          </div>
        )}
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
        {!isArchive && (
          <Button onClick={() => handlePinNotes(note.id)} className="w-15">
            {note.pinned ? <RiStarFill /> : <RiStarLine />}
          </Button>
        )}
        {!isArchive && (
          <Button onClick={() => editNote(note.id, note.note)} className="w-15">
            <RiEdit2Line />
          </Button>
        )}
        {isArchive ? (
          <Button
            onClick={() => {
              handleUnArchive(note.id, note);
              toast.success("Note Unarchived!", { position: "bottom-right" });
            }}
            className="w-15"
          >
            <RiInboxUnarchiveLine />
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleArchive(note.id, note);
              toast.success("Note archived!", { position: "bottom-right" });
            }}
            className="w-15"
          >
            <RiInboxArchiveLine />
          </Button>
        )}
        {/* <Button
          onClick={
            isArchive
              ? () => deleteArchiveNote(note.id)
              : () => deleteNote(note.id)
          }
          className="w-15"
        >
          <RiDeleteBinLine />
        </Button> */}
        {isArchive ? (
          <Button onClick={() => deleteArchiveNote(note.id)} className="w-15">
            <RiDeleteBinLine />
          </Button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-15">
                <RiDeleteBinLine />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This note will be permanently
                  deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteNote(note.id)}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
        <Button onClick={() => summarizeNote(noteText)} className="w-15">
          <RiBardFill />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NoteCard;
