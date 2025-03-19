import Button from "../components/Button";
import WT_1 from "../assets/WT_1.svg";

export default function WalkThFirst() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 py-6">
      {/* Container for Content */}
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Image Section */}
        <img
          src={WT_1}
          alt="WT_1.svg"
          className="w-full max-w-xs sm:max-w-md h-auto object-contain"
        />

        {/* Text Section */}
        <div className="w-full text-center flex flex-col items-center gap-4">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-normal  leading-relaxed tracking-wide">
            Search a word, and let AI
          </h1>
          <div className="flex gap-1">
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-normal  leading-relaxed tracking-wide">
              craft its{" "}
            </h1>
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed tracking-wide ">
              meaning & a story.{" "}
            </h1>
          </div>
        </div>

        {/* Button & Skip Section */}
        <div className="w-full flex flex-col items-center gap-4">
          <Button color="point" size="full" className="w-full max-w-sm py-3">
            <h1 className="text-lg sm:text-xl font-medium">Next</h1>
          </Button>
          <h1 className="text-sub font-semibold text-sm sm:text-base">Skip</h1>
        </div>
      </div>
    </div>
  );
}
