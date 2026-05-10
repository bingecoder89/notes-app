import React from "react";
import { Input } from "@/components/ui/input";

function SearchNote({ searchText, handleSearch }) {
  return (
    <div>
      <Input
        placeholder="Search note"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchNote;
