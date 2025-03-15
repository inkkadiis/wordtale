import Icnbookmark from "./Icnbookmark";
import WandIcon from "./WandIcon";
import WordPageContainer from "./WordPageContainer";

export default function WordCard() {
  return (
    <WordPageContainer>
      <div className="h-[30rem] bg-white border-borderColor border-l-4 border-t-4 border-b-4 rounded-tl-3xl rounded-bl-3xl p-9 flex flex-col gap-9">
        {/* Word + Pronunciation */}
        <div className="w-full flex items-baseline md:flex-row gap-2">
          <h1 className="text-black text-4xl md:text-5xl font-bold">Left</h1>
          <div className="flex flex-col">
            <div className="text-point text-lg md:text-xl font-medium tracking-tight">
              /left/
            </div>
          </div>
        </div>
        {/* ✅ 단어 부분만 hidden 적용, View all은 제외 */}
        <div className="h-full overflow-hidden flex-1">
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-10">
              {/* Definitions (스크롤 적용) */}
              <div className="flex flex-col gap-8">
                {[
                  {
                    number: "1.",
                    type: "ADJECTIVE",
                    definition:
                      "on, toward, or relating to the side of a human body or of a thing that is to the west when the person or thing is facing north.",
                  },
                  {
                    number: "2.",
                    type: "ADJECTIVE",
                    definition:
                      "relating to or denoting a person or group favoring left-wing views; progressive.",
                  },
                  {
                    number: "3.",
                    type: "NOUN",
                    definition: "the left-hand part, side, or direction.",
                  },
                  {
                    number: "4.",
                    type: "VERB",
                    definition: "past tense of leave.",
                  },
                  {
                    number: "5.",
                    type: "EXTRA",
                    definition: "additional example to test scrolling.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="Deflistcontent flex md:flex-row items-center gap-6"
                  >
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <div className="text-black text-base font-normal">
                          {item.number}
                        </div>
                        <h3 className="text-point text-base font-semibold uppercase">
                          {item.type}
                        </h3>
                      </div>
                      <div className="text-black text-base font-normal leading-snug">
                        {item.definition}
                      </div>
                    </div>
                    <WandIcon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ `View all`은 hidden 적용 X */}
        <div className="flex justify-center mt-3">
          <h6 className="text-point">View all</h6>
        </div>
      </div>

      {/* Bookmark 아이콘 유지 */}
      <div className="absolute top-0 right-0 -translate-y-1/2">
        <Icnbookmark />
      </div>
    </WordPageContainer>
  );
}
