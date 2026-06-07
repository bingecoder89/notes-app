import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router";
import { RiEvernoteLine } from "@remixicon/react";
import { RiArchive2Line } from "@remixicon/react";
import { Button } from "./ui/button";
import SearchNote from "./SearchNote";
function Header({ searchText, handleSearch }) {
  return (
    <div className="sticky top-0 mb-10 bg-background flex items-center justify-between p-2 shadow-md shadow-muted">
      <div className="flex items-center gap-2">
        <Link to="/">
          <RiEvernoteLine className="size-7 max-sm:size-6" />
        </Link>
        <div>
          <Link to="/">
            <p className="text-[16px] font-medium max-sm:text-[14px]">
              EveryNote
            </p>
          </Link>
          <p className="text-sm text-muted-foreground max-sm:hidden">
            take your notes.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/archive">
          <Button variant="outline">
            <RiArchive2Line />
          </Button>
        </Link>
        <SearchNote searchText={searchText} handleSearch={handleSearch} />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
