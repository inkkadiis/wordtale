// routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDef from "../pages/WordDef";
import Library from "../pages/Library";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/word" element={<WordDef />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
