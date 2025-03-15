import WordCard from "./WordCard";
import Novel from "./Novel";

function Slide() {
  return (
    <div className="SliderContainer w-full max-w-md h-auto overflow-hidden  relative">
      <div className="slider-wrapper flex flex-nowrap transition-transform duration-300 overflow-x-auto scroll-smooth">
        {/* First Slide: Fully Visible */}
        <div className="slide flex-shrink-0 w-[calc(100%-50px)] md:w-full">
          <WordCard />
        </div>

        {/* Second Slide: Partially Visible on Mobile */}
        <div className="slide flex-shrink-0 w-[80%] md:w-full">
          <Novel />
        </div>
      </div>
    </div>
  );
}

export default Slide;
