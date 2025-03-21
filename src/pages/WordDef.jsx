import WordCard from "../components/WordCard";
import WordNovel from "../components/WordNovel";
import Indicator from "../components/Indicator";
import { useState, useRef } from "react";

function WordDef() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(null);
  const mouseEndX = useRef(null);
  const maxIndex = 1; // Only two pages: WordCard (0) and WordNovel (1)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    e.preventDefault(); // Prevent unintended page scrolling
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50 && index < maxIndex) {
      setIndex(index + 1);
    } else if (difference < -50 && index > 0) {
      setIndex(index - 1);
    }
  };

  // Mouse Swipe Handlers
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (mouseStartX.current !== null) {
      mouseEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (mouseStartX.current !== null && mouseEndX.current !== null) {
      const difference = mouseStartX.current - mouseEndX.current;
      if (difference > 50 && index < maxIndex) {
        setIndex(index + 1);
      } else if (difference < -50 && index > 0) {
        setIndex(index - 1);
      }
    }
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  return (
    <div className="h-80p flex flex-col gap-3 items-stretch min-h-0 overflow-hidden">
      <div
        className="flex-1 min-h-0 relative overflow-x-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="h-full flex transition-transform duration-300 min-h-0 p-6 cursor-move active:cursor-grabbing gap-3"
          style={{
            transform: `translateX(-${index * 70}%)`,
          }}
        >
          {/* WordCard (90% visible, 10% WordNovel peeking on the right) */}
          <div className="min-w-[88%] h-full flex min-h-0 mr-[10%]">
            <WordCard />
          </div>

          {/* WordNovel (90% visible, 10% WordCard peeking on the left) */}
          <div className="min-w-[88%] h-full flex min-h-0 -ml-[10%]">
            <WordNovel />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Indicator index={index} />
      </div>
    </div>
  );
}

export default WordDef;
{
  /**
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
 */
}
