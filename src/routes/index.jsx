// routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDef from "../pages/WordDef";
import Library from "../pages/Library";
import HomeEmpty from "../pages/HomeEmpty";
import Nav from "../components/Nav";
import Splash from "../pages/Splash";
import WorkThFirst from "../pages/WorkThFirst";
import WorkThSecond from "../pages/WorkThSecond";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/word" element={<WordDef />} />
      <Route path="/library" element={<Library />} />
      <Route path="/homeEmpty" element={<HomeEmpty />} />
      {/*<Route path="/splash" element={<Splash />} /> */}
      <Route path="/workthsecond" element={<WorkThSecond />} />
    </Routes>
    {/*<Nav /> */}
  </BrowserRouter>
);

export default AppRoutes;
