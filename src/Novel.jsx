function Novel() {
  return (
    <div className="relative min-w-full bg-white rounded-tr-3xl rounded-br-3xl p-2">
      <div className="bg-white border-borderColor border-r-4 border-t-4 border-b-4 rounded-tr-3xl rounded-br-3xl p-9">
        {/* ✅ y auto , view all  */}
        <div className="h-96 overflow-y-auto">
          <div className="flex flex-col gap-9">
            <div className="px-[5px] bg-black rounded-full flex justify-center items-center w-6 h-6">
              <span className="text-white text-xs font-normal">1</span>
            </div>
            <p className="text-black text-base md:text-lg leading-snug">
              In the quiet town of Ridgeview, nestled amid rolling hills and
              whispering pines, stood an old, weather-beaten cabin. Its sturdy
              oak door creaked open to reveal a cozy interior bathed in the warm
              glow of a crackling fireplace. On the left side of the room, an
              ancient bookshelf leaned slightly, filled with dusty tomes and
              faded journals chronicling forgotten tales. Toward the west-facing
              window, a worn armchair sat, its cushions molded to fit the shape
              of its longtime occupant. Outside, toward the setting sun, the
              world painted itself in hues of crimson and gold, casting long
              shadows that stretched toward the horizon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novel;
