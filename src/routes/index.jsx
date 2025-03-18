// routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordDef from "../pages/WordDef";
import Library from "../pages/Library";
import HomeEmpty from "../pages/HomeEmpty";
import Nav from "../components/Nav";
import Splash from "../pages/Splash";
import WorkThFirst from "../pages/WorkThFirst";
import WorkThSecond from "../pages/WorkThSecond";
import WorkThThird from "../pages/WorkThThird";
import SignUpFirst from "../pages/SignUpFirst";
import SignIn from "../pages/SignIn";
import SignInFinal from "../pages/SignInFinal";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/word" element={<WordDef />} />
      <Route path="/library" element={<Library />} />
      <Route path="/homeempty" element={<HomeEmpty />} />
      {/*<Route path="/splash" element={<Splash />} /> */}
      <Route path="/workthfirst" element={<WorkThFirst />} />
      <Route path="/signupfirst" element={<SignUpFirst />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signinfinal" element={<SignInFinal />} />
    </Routes>
    <Nav />
  </BrowserRouter>
);

export default AppRoutes;
