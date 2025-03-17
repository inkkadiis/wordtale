import SearchBar from "../components/SearchBar";
import TodayWord from "../components/TodayWord";

export default function HomeEmpty() {
  return (
    <div className="w-96 left-[24px] top-[88px] inline-flex flex-col justify-start items-center gap-14">
      <SearchBar />

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <h1 className="self-stretch justify-center text-black text-xl font-medium  leading-loose tracking-wide">
          Today’s Word 👑
        </h1>
        <TodayWord />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-14">
        <h1 className="self-stretch justify-center text-black text-xl  leading-loose tracking-wide">
          Review 🔁
        </h1>
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div data-svg-wrapper>
            <svg
              width="70"
              height="62"
              viewBox="0 0 70 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5" filter="url(#filter0_d_878_2042)">
                <path
                  d="M34.9998 45.3333H20.8332C18.4996 45.3333 17.3328 45.3333 16.4415 44.8792C15.6575 44.4797 15.0201 43.8423 14.6206 43.0583C14.1665 42.167 14.1665 41.0002 14.1665 38.6667V18.6667C14.1665 16.3331 14.1665 15.1663 14.6206 14.275C15.0201 13.491 15.6575 12.8536 16.4415 12.4541C17.3328 12 18.4996 12 20.8332 12H21.6665C26.3336 12 28.6672 12 30.4498 12.9083C32.0178 13.7072 33.2926 14.9821 34.0916 16.5501C34.9998 18.3327 34.9998 20.6662 34.9998 25.3333M34.9998 45.3333V25.3333M34.9998 45.3333H49.1665C51.5001 45.3333 52.6668 45.3333 53.5581 44.8792C54.3421 44.4797 54.9796 43.8423 55.379 43.0583C55.8332 42.167 55.8332 41.0002 55.8332 38.6667V18.6667C55.8332 16.3331 55.8332 15.1663 55.379 14.275C54.9796 13.491 54.3421 12.8536 53.5581 12.4541C52.6668 12 51.5001 12 49.1665 12H48.3332C43.6661 12 41.3325 12 39.5499 12.9083C37.9819 13.7072 36.7071 14.9821 35.9081 16.5501C34.9998 18.3327 34.9998 20.6662 34.9998 25.3333"
                  stroke="#B8AF9F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_878_2042"
                  x="0.166504"
                  y="0"
                  width="69.6665"
                  height="61.3333"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.801074 0 0 0 0 0.773909 0 0 0 0 0.759286 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_878_2042"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_878_2042"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="self-stretch opacity-50 text-center justify-center text-[#b8af9f] text-lg font-semibold font-['Outfit'] leading-relaxed tracking-tight">
            Nothing yet!
            <br />
            Feed your brain some words
          </div>
        </div>
      </div>
    </div>
  );
}
