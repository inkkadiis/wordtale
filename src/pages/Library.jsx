import { useState } from "react";
import { Divider } from "../components/Divider";
import { Letter } from "../components/Letter";
import LibraryCard from "../components/LibraryCard";
import mockLibraryData from "../mockLibraryData.json"; // Mock 데이터 불러오기
import { Bookmark } from "../components/Icon";

export default function Library() {
  const [selectedLetter, setSelectedLetter] = useState("A"); // 기본값 A
  const libraryItems = mockLibraryData[selectedLetter] || []; // 선택된 철자에 해당하는 데이터

  return (
    <div className="min-w-md max-w-md grow rounded-3xl bg-white p-8 shadow-xl">
      {/* 철자 선택 버튼 */}
      <div className="grid grid-cols-13 gap-2 py-2">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
          (letter) => (
            <Letter
              key={letter}
              onClick={setSelectedLetter}
              isSelected={selectedLetter === letter}
            >
              {letter}
            </Letter>
          )
        )}
      </div>
      <div className="h-[30rem] overflow-y-auto flex flex-col gap-3">
        {libraryItems.length > 0 ? (
          libraryItems.map((item, index) => (
            <>
              <LibraryCard
                key={index}
                title={item.title}
                description={item.description}
                resetTrigger={selectedLetter}
              />
              {index !== libraryItems.length - 1 ? <Divider /> : null}
            </>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 h-full text-gray-500">
            <span className="text-6xl text-sub opacity-50 drop-shadow-xl">
              <Bookmark size={36} strokeWidth={2} />
            </span>
            {/* 아이콘 (필요하면 SVG로 변경) */}
            <h3 className="mt-4 text-center text-sub opacity-50">
              A blank page…
              <br />
              waiting for your favorite words!
            </h3>
            <h3 className="text-center text-sub font-semibold underline">
              Start exploring
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
