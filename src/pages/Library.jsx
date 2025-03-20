import { useState } from "react";
import { Divider } from "../components/Divider";
import { Letter } from "../components/Letter";
import LibraryCard from "../components/LibraryCard";
import mockLibraryData from "../mockLibraryData.json"; // Mock 데이터 불러오기
import { Bookmark } from "../components/Icon";



{/** */}
export default function Library() {
  const [selectedLetter, setSelectedLetter] = useState("A"); // 기본값 A
  const libraryItems = mockLibraryData[selectedLetter] || []; // 선택된 철자에 해당하는 데이터

  return (
    <div className="h-80p max-w-md grow rounded-3xl bg-white p-6 md:p-8 shadow-lg flex flex-col gap-6 m-6">
      {/* 철자 선택 버튼 */}
      
      <div className="grid grid-cols-13  md:grid-cols-13 gap-1 sm:gap-2 py-2 flex-none">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
          (letter) => (
            <Letter
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              isSelected={selectedLetter === letter}
            >
              {letter}
            </Letter>
          )
        )}
      </div>

      {/* 도서관 아이템 목록 */}{/* 단어뜻이 작을때 화살표 아이콘이 왼쪽으로 땡겨짐 */ }
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 min-h-0 scrollbar-thin scrollbar-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {libraryItems.length > 0 ? (
          libraryItems.map((item, index) => (
            <div key={index}>
              <LibraryCard
                title={item.title}
                description={item.description}
                resetTrigger={selectedLetter}
              />
              {index !== libraryItems.length - 1 && <Divider />}
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-gray-500">
            <span className="text-6xl text-sub opacity-50 drop-shadow-xl">
              <Bookmark size={36} strokeWidth={2} />
            </span>
            <h3 className="mt-4 text-center text-sub opacity-50 text-base md:text-lg">
              A blank page…
              <br />
              waiting for your favorite words!
            </h3>
            <h3 className="text-center text-sub font-semibold underline text-sm md:text-base">
              Start exploring
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}



{/** 
export default function Library() {
  const [selectedLetter, setSelectedLetter] = useState("A"); // 기본값 A
  const libraryItems = mockLibraryData[selectedLetter] || []; // 선택된 철자에 해당하는 데이터

  */}
  {/** 
  return (
    <div className="h-68p max-w-md grow rounded-3xl bg-white p-8 shadow-xl flex flex-col">
      {/* 철자 선택 버튼 */} 
      {/** 
      <div className="grid grid-cols-13 gap-2 py-2 flex-none">
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
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 min-h-0">
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
          <div className="h-full flex flex-col items-center justify-center gap-3 text-gray-500">
            <span className="text-6xl text-sub opacity-50 drop-shadow-xl">
              <Bookmark size={36} strokeWidth={2} />
            </span>
            {/* 아이콘 (필요하면 SVG로 변경) */}
            {/** 
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
*/}
