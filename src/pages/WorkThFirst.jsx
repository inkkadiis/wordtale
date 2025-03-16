import Button from "../components/Button";

export default function WorkThFirst() {
  return (
    <div className="w-96 h-[932px] flex flex-col  relative bg-main overflow-hidden">
      {/**  left page
      <div className="w-48 h-80 left-[256.81px] top-[170px] absolute overflow-hidden">
        <div className="w-48 h-80 left-[195.19px] top-[327.53px] absolute origin-top-left rotate-180 bg-white rounded-tl-xl rounded-bl-xl shadow-[0.5109723210334778px_2.554861307144165px_5.620695114135742px_0px_rgba(147,145,133,0.10)] shadow-[2.554861307144165px_9.708473205566406px_10.21944522857666px_0px_rgba(147,145,133,0.09)] shadow-[6.131667613983154px_22.48278045654297px_13.79625129699707px_0px_rgba(147,145,133,0.05)] shadow-[11.241390228271484px_39.855838775634766px_16.35111427307129px_0px_rgba(147,145,133,0.01)] shadow-[17.37306022644043px_61.82765197753906px_17.884033203125px_0px_rgba(147,145,133,0.00)] border-[0.51px] border-[#f4f1eb]" />
        <div className="w-48 h-80 left-[191.11px] top-[323.45px] absolute origin-top-left rotate-180 rounded-tl-[9.71px] rounded-bl-[9.71px] border-l-2 border-t-2 border-b-2 border-[#f4f1eb]" />
        <div className="w-40 left-[18.39px] top-[85.33px] absolute inline-flex flex-col justify-start items-start gap-1.5">
          <div className="px-[2.55px] bg-black rounded-2xl flex flex-col justify-center items-center">
            <div className="w-1 text-center justify-center text-white text-[6.64px] font-normal font-['Outfit'] leading-[9.30px] tracking-tight">
              1
            </div>
          </div>
          <div className="self-stretch justify-start">
            <span class="text-black text-[10px] font-medium font-['Cormorant_Garamond'] leading-3 tracking-tight">
              Lily loved mornings. She sat by her window with a warm cup of tea,
              watching the sky turn golden. One day, a little bluebird landed on
              her windowsill. It chirped a sweet melody, tilting its head as if
              to say,{" "}
            </span>
            <span class="text-black text-[10px] font-medium font-['Cormorant_Garamond'] leading-3 tracking-tight">
              "Good morning!"
              <br />
              <br />
            </span>
            <span class="text-black text-[10px] font-medium font-['Cormorant_Garamond'] leading-3 tracking-tight">
              Lily smiled. "What a happy little bird you are!" she said. Each
              morning, the bluebird returned, singing its cheerful tune. And
              each morning, Lily felt her heart grow lighter.
              <br />
              <br />
              Sometimes, happiness is as simple as a song and a smile.
            </span>
          </div>
        </div>
        <div className="w-44 h-80 left-[0.19px] top-0 absolute bg-gradient-to-r from-white/0 to-[#fdf8f0]" />
      </div>*/}
      {/**  right page 
      <div className="w-48 h-80 left-[56px] top-[170px] absolute ">
        <div className="w-48 h-80 left-0 top-0 absolute bg-white rounded-tl-xl rounded-bl-xl border-[0.51px] border-[#f4f1eb]" />
        <div className="w-48 h-80 left-[4.08px] top-[4.08px] absolute rounded-tl-[9.70px] rounded-bl-[9.70px] border-l-2 border-t-2 border-b-2 border-[#f4f1eb]" />
        <div className="w-40 left-[18.37px] top-[61.24px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="w-20 h-7 relative">
            <div className="left-0 top-0 absolute justify-start text-black text-2xl font-bold font-['Outfit']">
              Happy
            </div>
            <div className="left-[74.63px] top-[16.76px] absolute justify-start text-[#a03c06] text-xs font-medium font-['EB_Garamond'] tracking-tight">
              /ˈhapē/
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-0.5">
                <div className="inline-flex justify-start items-start gap-0.5">
                  <div className="justify-start text-black text-[10px] font-normal font-['Outfit']">
                    1.{" "}
                  </div>
                  <div className="justify-start text-[#ff8340] text-[10px] font-semibold font-['Outfit'] uppercase">
                    ADJECTIVE
                  </div>
                </div>
                <div className="self-stretch justify-start text-black text-[10px] font-normal font-['EB_Garamond'] leading-3">
                  feeling or showing
                  <br />
                  pleasure or contentment.
                </div>
              </div>
              <div className="w-3 h-3 relative overflow-hidden">
                <div
                  data-svg-wrapper
                  className="left-[1.02px] top-[1.02px] absolute"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.48304 3.58614L9.01414 5.11724M2.88973 3.07577V5.11724M10.0349 7.15871V9.20018M5.44157 1.0343V2.05504M3.91047 4.0965H1.869M11.0556 8.17944H9.01414M5.95194 1.54467H4.9312M11.3821 1.87133L10.7289 1.21806C10.6714 1.16004 10.6031 1.11398 10.5278 1.08254C10.4524 1.05111 10.3716 1.03492 10.29 1.03492C10.2083 1.03492 10.1275 1.05111 10.0522 1.08254C9.97682 1.11398 9.90847 1.16004 9.85104 1.21806L1.54226 9.52683C1.48424 9.58426 1.43818 9.65262 1.40675 9.72796C1.37532 9.80329 1.35913 9.88412 1.35913 9.96575C1.35913 10.0474 1.37532 10.1282 1.40675 10.2035C1.43818 10.2789 1.48424 10.3472 1.54226 10.4047L2.19553 11.0579C2.2526 11.1166 2.32085 11.1632 2.39623 11.195C2.47162 11.2269 2.55262 11.2433 2.63445 11.2433C2.71628 11.2433 2.79728 11.2269 2.87267 11.195C2.94805 11.1632 3.01629 11.1166 3.07336 11.0579L11.3821 2.74916C11.4408 2.69209 11.4874 2.62385 11.5192 2.54846C11.5511 2.47307 11.5675 2.39207 11.5675 2.31024C11.5675 2.22841 11.5511 2.14741 11.5192 2.07203C11.4874 1.99664 11.4408 1.9284 11.3821 1.87133Z"
                      stroke="#B8AF9F"
                      stroke-width="1.02073"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-0.5">
                <div className="inline-flex justify-start items-start gap-0.5">
                  <div className="justify-start text-black text-[10px] font-normal font-['Outfit']">
                    2.{" "}
                  </div>
                  <div className="justify-start text-[#ff8340] text-[10px] font-semibold font-['Outfit'] uppercase">
                    ADJECTIVE
                  </div>
                </div>
                <div className="w-28 justify-start text-black text-[10px] font-normal font-['EB_Garamond'] leading-3">
                  having a sense of confidence
                  <br />
                  in or satisfaction with (a person, arrangement, or situation).
                </div>
              </div>
              <div className="w-3 h-3 relative overflow-hidden">
                <div
                  data-svg-wrapper
                  className="left-[1.02px] top-[1.02px] absolute"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.48304 3.62764L9.01414 5.15874M2.88973 3.11727V5.15874M10.0349 7.20021V9.24168M5.44157 1.07581V2.09654M3.91047 4.13801H1.869M11.0556 8.22095H9.01414M5.95194 1.58617H4.9312M11.3821 1.91283L10.7289 1.25956C10.6714 1.20154 10.6031 1.15548 10.5278 1.12405C10.4524 1.09261 10.3716 1.07643 10.29 1.07643C10.2083 1.07643 10.1275 1.09261 10.0522 1.12405C9.97682 1.15548 9.90847 1.20154 9.85104 1.25956L1.54226 9.56834C1.48424 9.62576 1.43818 9.69412 1.40675 9.76946C1.37532 9.8448 1.35913 9.92562 1.35913 10.0073C1.35913 10.0889 1.37532 10.1697 1.40675 10.245C1.43818 10.3204 1.48424 10.3887 1.54226 10.4462L2.19553 11.0994C2.2526 11.1581 2.32085 11.2047 2.39623 11.2365C2.47162 11.2684 2.55262 11.2848 2.63445 11.2848C2.71628 11.2848 2.79728 11.2684 2.87267 11.2365C2.94805 11.2047 3.01629 11.1581 3.07336 11.0994L11.3821 2.79066C11.4408 2.73359 11.4874 2.66535 11.5192 2.58996C11.5511 2.51458 11.5675 2.43358 11.5675 2.35175C11.5675 2.26992 11.5511 2.18892 11.5192 2.11353C11.4874 2.03814 11.4408 1.9699 11.3821 1.91283Z"
                      stroke="#B8AF9F"
                      stroke-width="1.02073"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-0.5">
                <div className="inline-flex justify-start items-start gap-0.5">
                  <div className="justify-start text-black text-[10px] font-normal font-['Outfit']">
                    3.{" "}
                  </div>
                  <div className="justify-start text-[#ff8340] text-[10px] font-semibold font-['Outfit'] uppercase">
                    ADJective
                  </div>
                </div>
                <div className="self-stretch justify-start text-black text-[10px] font-normal font-['EB_Garamond'] leading-3">
                  fortunate and convenient.
                </div>
              </div>
              <div className="w-3 h-3 relative overflow-hidden">
                <div
                  data-svg-wrapper
                  className="left-[1.02px] top-[1.02px] absolute"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.48304 3.66902L9.01414 5.20012M2.88973 3.15866V5.20012M10.0349 7.24159V9.28306M5.44157 1.11719V2.13792M3.91047 4.17939H1.869M11.0556 8.26233H9.01414M5.95194 1.62755H4.9312M11.3821 1.95421L10.7289 1.30094C10.6714 1.24292 10.6031 1.19686 10.5278 1.16543C10.4524 1.134 10.3716 1.11781 10.29 1.11781C10.2083 1.11781 10.1275 1.134 10.0522 1.16543C9.97682 1.19686 9.90847 1.24292 9.85104 1.30094L1.54226 9.60972C1.48424 9.66714 1.43818 9.7355 1.40675 9.81084C1.37532 9.88618 1.35913 9.967 1.35913 10.0486C1.35913 10.1303 1.37532 10.2111 1.40675 10.2864C1.43818 10.3618 1.48424 10.4301 1.54226 10.4876L2.19553 11.1408C2.2526 11.1995 2.32085 11.2461 2.39623 11.2779C2.47162 11.3097 2.55262 11.3261 2.63445 11.3261C2.71628 11.3261 2.79728 11.3097 2.87267 11.2779C2.94805 11.2461 3.01629 11.1995 3.07336 11.1408L11.3821 2.83204C11.4408 2.77497 11.4874 2.70673 11.5192 2.63135C11.5511 2.55596 11.5675 2.47496 11.5675 2.39313C11.5675 2.3113 11.5511 2.2303 11.5192 2.15491C11.4874 2.07953 11.4408 2.01128 11.3821 1.95421Z"
                      stroke="#B8AF9F"
                      stroke-width="1.02073"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      {/** gradient 
      <div className="w-96 h-64 left-0 top-[299px] absolute bg-gradient-to-b from-[#fdf8f0]/0 to-[#fdf9f0]" />*/}
      {/** point icon 
      <div className="w-20 p-2.5 left-[186px] top-[263px] absolute bg-white rounded-3xl  inline-flex justify-center items-center gap-2.5">
        <div className="w-6 h-6 relative overflow-hidden">
          <div data-svg-wrapper className="left-[2px] top-[2px] absolute">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6L16 9M4 5V9M18 13V17M9 1V3M6 7H2M20 15H16M10 2H8M20.6398 2.64005L19.3598 1.36004C19.2473 1.24636 19.1133 1.15612 18.9657 1.09452C18.8181 1.03293 18.6598 1.00122 18.4998 1.00122C18.3399 1.00122 18.1815 1.03293 18.0339 1.09452C17.8863 1.15612 17.7523 1.24636 17.6398 1.36004L1.3598 17.64C1.24612 17.7526 1.15587 17.8865 1.09428 18.0341C1.03269 18.1817 1.00098 18.3401 1.00098 18.5C1.00098 18.66 1.03269 18.8184 1.09428 18.966C1.15587 19.1136 1.24612 19.2475 1.3598 19.36L2.6398 20.64C2.75162 20.755 2.88534 20.8463 3.03305 20.9087C3.18076 20.971 3.33947 21.0031 3.4998 21.0031C3.66014 21.0031 3.81885 20.971 3.96656 20.9087C4.11427 20.8463 4.24798 20.755 4.3598 20.64L20.6398 4.36005C20.7547 4.24822 20.846 4.11451 20.9084 3.9668C20.9708 3.81909 21.0029 3.66038 21.0029 3.50005C21.0029 3.33971 20.9708 3.181 20.9084 3.03329C20.846 2.88558 20.7547 2.75187 20.6398 2.64005Z"
                stroke="url(#paint0_linear_888_2322)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_888_2322"
                  x1="19.5"
                  y1="-0.5"
                  x2="3.5"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCB49" />
                  <stop offset="1" stop-color="#FF8341" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>*/}

      {/* Search ~ a story */}
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
      <Button color="point" size="full">
        Next
      </Button>
    </div>
  );
}
