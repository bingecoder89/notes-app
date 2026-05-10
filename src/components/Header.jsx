import { ThemeToggle } from "./ThemeToggle";
import { RiEvernoteLine } from "@remixicon/react";
import SearchNote from "./SearchNote";
function Header({ searchText, handleSearch }) {
  return (
    <div className="h-16 flex items-center justify-between px-4 font-mono shadow-md">
      <div className="flex items-center gap-1.5">
        <RiEvernoteLine size={30} />
        <div>
          <p className="text-xl font-extrabold">EveryNote</p>
          <p className="text-sm text-muted-foreground">take your notes.</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <SearchNote searchText={searchText} handleSearch={handleSearch} />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
