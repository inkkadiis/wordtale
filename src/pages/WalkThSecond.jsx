import Button from "../components/Button";

import WT_2 from "../assets/WT_2.svg";

export default function WalkThSecond() {
  return (
    <div>
      <div className="size-full flex flex-col justify-center items-center ">
        <img src={WT_2} alt="WT_2.svg" className="size-full " />

        <div className="size-full flex flex-col justify-center items-center gap-9">
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
    </div>
  );
}
