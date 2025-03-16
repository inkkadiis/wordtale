import WordCard from "../components/WordCard";
import WordNovel from "../components/WordNovel";
import Indicator from "../components/Indicator";
import { useState, useRef } from "react";

function WordDef() {
  const [index, setIndex] = useState(0); // 현재 보여지는 카드 (0: WordCard, 1: Novel)
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
      // 왼쪽으로 스와이프 → 다음 카드(Novel)로 이동
      setIndex(1);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // 오른쪽으로 스와이프 → 이전 카드(WordCard)로 이동
      setIndex(0);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <div
        className="overflow-hidden max-w-md px-5 py-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex transition-transform duration-300`}
          style={{
            transform: `translateX(-${index * 100}%)`, // 0% → WordCard, -100% → Novel
          }}
        >
          <div className="min-w-full px-3">
            <WordCard />
          </div>
          <div className="min-w-full px-3">
            <WordNovel />
          </div>
        </div>
      </div>
      <Indicator index={index} />
    </div>
  );
}

export default WordDef;
