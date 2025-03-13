import "./App.css";
//import Pages from './mainPage_1'
import MainPages from "./mainPage_1";
//import './App.css'
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Button color="point" size="full">
          point big Button
        </Button>
        <Button color="outlinePoint" size="fit">
          outline Point small Button
        </Button>
        <Button color="sub" size="fit">
          sub small Button
        </Button>
        <Button color="oulineSub" size="full">
          outline Sub Big Button
        </Button>
      </div>
      <MainPages />
    </>
  );
}

export default App;
