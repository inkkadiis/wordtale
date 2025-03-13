import "./App.css";
//import Pages from './mainPage_1'
import MainPages from "./mainPage_1";
//import './App.css'
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Button color="point" size="big">
          point big Button
        </Button>
        <Button color="outlinePoint" size="small">
          outline Point small Button
        </Button>
        <Button color="sub">sub small Button</Button>
        <Button color="oulineSub" size="big">
          outline Sub Big Button
        </Button>
      </div>
      <MainPages />
    </>
  );
}

export default App;
