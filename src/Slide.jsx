import WordCard from "./WordCard";
import Novel from "./Novel";

function Slide() {
  return (
    <div className="SliderContianer w-full max-w-md h-auto overflow-hidden p-6 md:p-8">
      <div className="slider-wrapper ">
        <div className="flex items-center">
          <div className="slide md:shrink-0 w-full">
            <WordCard />
          </div>
          <div className="slide md:shrink-0 w-full">
            <Novel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
