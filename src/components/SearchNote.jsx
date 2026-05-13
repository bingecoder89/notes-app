import React from "react";
import { Input } from "@/components/ui/input";

function SearchNote({ searchText, handleSearch }) {
  return (
    <div>
      <Input
        placeholder="Search note"
        value={searchText}
        onChange={handleSearch}
        className="max-sm:text-xs max-sm:w-28"
      />
    </div>
  );
}

export default SearchNote;
