import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import NotesProvider from "./context/NotesContext";

createRoot(document.getElementById("root")).render(
  <NotesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotesProvider>,
);
