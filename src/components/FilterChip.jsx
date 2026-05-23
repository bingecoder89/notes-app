import React from "react";
import { Badge } from "./ui/badge";

import { RiCloseLine } from "@remixicon/react";

function FilterChip({ selectedTags, deleteTag }) {
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
    </div>
  );
}

export default FilterChip;
