import { ThemeToggle } from "./ThemeToggle";
import { RiEvernoteLine } from "@remixicon/react";
import SearchNote from "./SearchNote";
function Header({ searchText, handleSearch }) {
  return (
    <div className="flex items-center justify-between p-2 shadow-md shadow-muted">
      <div className="flex items-center gap-2">
        <RiEvernoteLine className="size-7 max-sm:size-6" />
        <div>
          <p className="text-xl font-medium">EveryNote</p>
          <p className="text-sm text-muted-foreground max-sm:hidden">
            take your notes.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SearchNote searchText={searchText} handleSearch={handleSearch} />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
