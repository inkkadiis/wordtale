import "./App.css";
import WordCard from "./WordCard";
import Button from "./components/Button";
import Novel from "./Novel";
import Slide from "./Slide";
import Indicator from "./components/Indicator";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col items-center  h-full bg-main gap-6">
        <div>
          {/*
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
          */}
        </div>

        <Slide />
        <Indicator />
        <Nav />
      </div>
    </>
  );
}

export default App;
