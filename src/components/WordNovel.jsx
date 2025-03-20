export default function WordNovel() {
  return (
    <div className="relative w-full h-full bg-white rounded-tr-3xl rounded-br-3xl pt-2 pr-2 pb-2 shadow-lg clip-container">
      <div className="w-full h-full flex flex-col justify-center  bg-white border-borderColor border-r-4 border-t-4 border-b-4 rounded-tr-3xl rounded-br-3xl p-7">
        <div className="h-[80%] flex flex-col  ">
          <div className="h-full flex-1  overflow-y-auto min-h-0 scroll-fade pt-3">
            <div className="flex flex-col gap-5 justify-center">
              <div className="bg-black rounded-full flex justify-center items-center w-6 h-6">
                <span className="font-outfit text-white text-xs font-normal">
                  1
                </span>
              </div>
              <p className="text-black text-base md:text-lg leading-snug">
                In the quiet town of Ridgeview, nestled amid rolling hills and
                whispering pines, stood an old, weather-beaten cabin. Its sturdy
                oak door creaked open to reveal a cozy interior bathed in the
                warm glow of a crackling fireplace. On the left side of the
                room, an ancient bookshelf leaned slightly, filled with dusty
                tomes and faded journals chronicling forgotten tales. Toward the
                west-facing window, a worn armchair sat, its cushions molded to
                fit the shape of its longtime occupant. Outside, toward the
                setting sun, the world painted itself in hues of crimson and
                gold, casting long shadows that stretched toward the horizon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
