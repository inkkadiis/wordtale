import Icnbookmark from "./Icnbookmark";
import IcnbookmarkOff from "./IcnbookmarkOff";
import WandIcon from "./WandIcon";

export default function WordCard() {
  return (
    <div className="relative w-full h-full bg-white rounded-tl-3xl rounded-bl-3xl pt-2 pl-2 pb-2 shadow-lg clip-container">
      <div className="w-full h-full bg-white border-borderColor border-l-4 border-t-4 border-b-4 rounded-tl-3xl rounded-bl-3xl p-7 flex flex-col justify-center content-center min-h-0">
        <div className="h-[80%] flex flex-col gap-9  ">
          <div className="w-full flex items-baseline gap-2">
            <h1 className="text-black text-4xl md:text-5xl font-bold">Left</h1>
            <div className="flex flex-col">
              <div className="text-point text-lg md:text-xl font-medium tracking-normal">
                /left/
              </div>
            </div>
          </div>
          <div className="h-full flex-1 overflow-y-auto min-h-0">
            <div className="h-full overflow-y-auto min-h-0 scroll-fade scrollbar-no-arrows py-2">
              <div className="flex flex-col gap-10">
                {/* Definitions (스크롤 적용) */}
                <div className="flex flex-col gap-8 py-2">
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
        </div>
      </div>
      <div className="absolute top-[-4px] right-[calc(var(--spacing)*10)] ">
        <IcnbookmarkOff />
      </div>
    </div>
  );
}
