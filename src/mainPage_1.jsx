import WandIcon from "./components/WandIcon";
import Icnbookmark from "./components/Icnbookmark";

function MainPages() {
  return (
    <div className="Wordshortdef w-full max-w-md h-auto bg-[#fdf8f0] p-6 md:p-6 lg:p-8">
      <div className="Contetnword w-full md:w-96 mx-auto relative flex flex-col justify-start items-center gap-6">
        <div className="Wordbook w-full h-auto bg-white rounded-tl-3xl rounded-bl-3xl shadow-xl border border-[#f4f1eb] p-9 ">
          <div className="Wordcontents w-full md:w-80 mx-auto flex flex-col gap-9">
            <div className="Wordwithpronoun w-full flex flex-h md:flex-row md:items-center gap-2">
              <div className="text-black text-4xl md:text-5xl font-bold">
                Left
              </div>
              <div className="text-[#a03c06] text-lg md:text-xl font-medium tracking-tight">
                /left/
              </div>
            </div>

            <div className="Deflist flex flex-col gap-8">
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="Deflistcontent flex flex-h md:flex-row items-center gap-6"
                >
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div className="text-black text-base font-normal">
                        {item.number}
                      </div>
                      <div className="text-[#ff8340] text-base font-semibold uppercase">
                        {item.type}
                      </div>
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
          <Icnbookmark />
        </div>
      </div>
    </div>
  );
}

export default MainPages;
