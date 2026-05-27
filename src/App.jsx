import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

function App() {
  const [searchText, setSearchtext] = useState("");

  const handleSearch = (e) => {
    setSearchtext(e.target.value);
  };
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Routes>
          <Route
            element={
              <Layout searchText={searchText} handleSearch={handleSearch} />
            }
          >
            <Route path="/" element={<Home searchText={searchText} />} />
            <Route path="/archive" element={<Archive />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
