import React from "react";
import { Badge } from "./ui/badge";

import { RiCloseLine } from "@remixicon/react";

function FilterChip({ selectedTags, setSelectedTags, deleteTag }) {
  return (
    <div className="flex items-center gap-1.5 m-2.5">
      {selectedTags.map((tag, index) => {
        return (
          <Badge onClick={() => deleteTag(index)} key={index}>
            <RiCloseLine />
            {tag}
          </Badge>
        );
      })}
      {selectedTags.length > 0 && (
        <Badge onClick={() => setSelectedTags([])}>Clear All</Badge>
      )}
    </div>
  );
}

export default FilterChip;
