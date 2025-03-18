import Button from "../components/Button";
import Icnbookmark from "../components/Icnbookmark";

export default function WalkThSecond() {
  return (
    <div>
      <div className="w-full max-x-md h-68p flex flex-col justify-center items-center relative bg-main overflow-hidden"></div>
      <Icnbookmark />

      <div className="size-full max-x-md flex flex-col justify-center items-center gap-9">
        <div className="  text-center justify-center">
          <span class="text-black text-2xl font-normal font-['Outfit'] leading-loose tracking-wide">
            Search a word, and let AI
            <br />
            craft its{" "}
          </span>
          <span class="text-black text-2xl font-bold font-['Outfit'] leading-loose tracking-wide">
            meaning{" "}
          </span>
          <span class="text-black text-2xl font-normal font-['Outfit'] leading-loose tracking-wide">
            &{" "}
          </span>
          <span class="text-black text-2xl font-bold font-['Outfit'] leading-loose tracking-wide">
            a story
          </span>
          <span class="text-black text-2xl font-normal font-['Outfit'] leading-loose tracking-wide">
            .
          </span>
        </div>
        <div className="flex flex-col self-stretch justify-center items-center gap-5">
          <Button color="point" size="full" className="h1 ">
            <h1 className="text-xl font-medium">Next</h1>
          </Button>
          <h1 className="text-sub font-semibold">Skip</h1>
        </div>
      </div>
    </div>
  );
}
