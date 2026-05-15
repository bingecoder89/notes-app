import React from "react";
import Markdown from "./Markdown";

import { Button } from "@/components/ui/button";

function Modal({
  editText,
  setEditText,
  setIsModalOpen,
  saveEdit,
  handleKeyDown,
}) {
  return (
    <div className="fixed inset-0 flex flex-col items-center backdrop-blur-md">
      <Markdown editText={editText} setEditText={setEditText} />
      <div className="w-11/12 flex gap-2">
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
