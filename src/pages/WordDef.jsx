import WordCard from "../components/WordCard";
import WordNovel from "../components/WordNovel";
import Indicator from "../components/Indicator";
import { useState, useRef } from "react";

function WordDef() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setIndex(1);
    } else if (touchEndX.current - touchStartX.current > 50) {
      setIndex(0);
    }
  };

  return (
    <>
      <div className="h-68p flex flex-col gap-8 items-stretch min-h-0">
        <div
          className="flex-1 min-h-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="h-full items-stretch flex flex-nowrap
            transition-transform duration-300 min-h-0"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            <div className="min-w-full h-full flex min-h-0">
              <WordCard />
            </div>
            <div className="min-w-full h-full flex min-h-0">
              <WordNovel />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Indicator index={index} />
        </div>
      </div>
    </>
  );
}

export default WordDef;
