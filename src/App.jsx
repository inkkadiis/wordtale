import "./App.css";
import WordDef from "./WordDef";

function App() {
  return (
    <>
      <div className="p-6 md:p-6 lg:p-8 w-screen flex flex-col items-center h-full bg-main gap-6">
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

        <WordDef />
      </div>
    </>
  );
}

export default App;
