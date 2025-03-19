// routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDef from "../pages/WordDef";
import Library from "../pages/Library";
import HomeEmpty from "../pages/HomeEmpty";
import Nav from "../components/Nav";
import Splash from "../pages/Splash";
import WalkThFirst from "../pages/WalkThFirst";
import WalkThSecond from "../pages/WalkThSecond";
import WalkThThird from "../pages/WalkThThird";
import SignUpFirst from "../pages/SignUpFirst";
import SignIn from "../pages/SignIn";
import SignUpFinal from "../pages/SignupFinal";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/word" element={<WordDef />} />
      <Route path="/library" element={<Library />} />
      <Route path="/homeempty" element={<HomeEmpty />} />
      {/*<Route path="/splash" element={<Splash />} /> */}
      <Route path="/walkthfirst" element={<WalkThThird />} />
      <Route path="/signupfirst" element={<SignUpFirst />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signupfinal" element={<SignUpFinal />} />
    </Routes>
    <Nav />
  </BrowserRouter>
);

export default AppRoutes;
