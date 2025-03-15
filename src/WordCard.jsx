import WandIcon from "./components/WandIcon";
import Icnbookmark from "./components/Icnbookmark";

function WordCard() {
  return (
    <div className="Wordshortdef w-full max-w-md h-auto bg-m p-6 md:p-6 lg:p-8">
      <div className="Contetnword w-full mx-auto relative flex flex-col justify-start items-center gap-6">
        <div className="Wordbook w-full h-auto bg-white rounded-tl-3xl rounded-bl-3xl shadow-xl  p-9">
          <div className="Wordcontents w-full mx-auto flex flex-col gap-9">
            {/* Word + Pronunciation */}
            <div className="Wordwithpronoun w-full flex items-baseline md:flex-row gap-2">
              <h1 className="text-black text-4xl md:text-5xl font-bold">
                Left
              </h1>
              <div className="flex flex-col">
                <div className="text-point text-lg md:text-xl font-medium tracking-tight">
                  /left/
                </div>
              </div>
            </div>

            {/* Definitions */}
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
                  className="Deflistcontent flex flex-col md:flex-row items-center gap-6"
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

            {/* Placeholder for Future Content */}
            <div>{/** View all div */}</div>
          </div>

          {/* Keeping `Icnbookmark` as is, since it works now */}
          <Icnbookmark />
        </div>
      </div>
    </div>
  );
}

export default WordCard;
