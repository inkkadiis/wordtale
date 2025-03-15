import { Right, Trash } from "./Icon";
import { useState, useRef } from "react";

export default function LibraryCard() {
  const [isRevealed, setIsRevealed] = useState(false);
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
      // 왼쪽으로 스와이프했을 때 아이콘 표시
      setIsRevealed(true);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // 오른쪽으로 스와이프했을 때 아이콘 숨김
      setIsRevealed(false);
    }
  };

  return (
    <div
      className="relative flex" // 부모 요소를 flex로 설정
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 메인 콘텐츠 (슬라이드 시 왼쪽으로 이동) */}
      <div
        className={`flex justify-between gap-6 rounded bg-white px-3 py-2 shadow-md transition-transform duration-300 z-10
        ${isRevealed ? `-translate-x-[50px]` : "translate-x-0"}
     `}
      >
        <div className="flex-1 max-w-56">
          <h2 className="text-point">Apple</h2>
          <p>To leave something behind or give up completely</p>
        </div>
        <button type="button">
          <Right />
        </button>
      </div>

      {/* 숨겨진 아이콘 (슬라이드 시 나타남) */}
      <div
        className={`z-0 h-full absolute top-0 right-0 flex transition-opacity duration-100
        ${isRevealed ? "opacity-100" : "opacity-0"}
          `}
      >
        <button className="bg-sub text-white px-4 py-2 rounded-r">
          <Trash />
        </button>
      </div>
    </div>
  );
}
