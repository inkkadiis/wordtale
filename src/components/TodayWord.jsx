export default function TodayWord() {
  return (
    <div className="nav-shadow self-stretch p-6 bg-white rounded-3xl  flex flex-col justify-start items-end gap-5">
      <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <h1 className="self-stretch justify-center text-point text-xl font-semibold  leading-7 tracking-normal">
          Gratitude
        </h1>
        <div className="self-stretch justify-center text-black text-lg  leading-relaxed tracking-normal">
          the quality of being thankful; readiness to show appreciation for ...
        </div>
      </div>
      <div className="rounded-[5px] inline-flex justify-center items-center gap-1">
        <h1 className="justify-start text-sub text-base  leading-snug tracking-normal">
          View All
        </h1>
        <div className="w-6 h-6 relative origin-top-left  overflow-hidden">
          <div data-svg-wrapper className="left-[9px] top-[6px] absolute">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L0.999999 1"
                stroke="#B8AF9F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
