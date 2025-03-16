// routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDef from "../pages/WordDef";
import Library from "../pages/Library";
import HomeEmpty from "../components/HomeEmpty";
import Splash from "../components/Splash";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/word" element={<WordDef />} />
      <Route path="/library" element={<Library />} />
      <Route path="/homeEmpty" element={<HomeEmpty />} />
      <Route path="/splash" element={<Splash />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
