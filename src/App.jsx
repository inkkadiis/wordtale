import "./App.css";
import WordCard from "./WordCard";
import Button from "./components/Button";
import LibraryCard from "./components/LibraryCard";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center h-full bg-[#FDF9F0]">
        <LibraryCard />
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
        <WordCard />
      </div>
    </>
  );
}

export default App;
