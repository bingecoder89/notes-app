import React from "react";
import { ThemeProvider } from "./components/theme-provider";

import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
