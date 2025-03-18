import Button from "../components/Button";

export default function WorkThThird() {
  return (
    <div className="w-full max-x-md h-68p flex flex-col justify-center items-center relative bg-main overflow-hidden">
      <div className="size-full max-x-md flex flex-col justify-center items-center gap-9">
        <div className="  text-center justify-center ">
          <h1 class="text-black text-2xl font-normal leading-loose tracking-wide">
            Expand your vocabulary
          </h1>
          <span class="text-black text-2xl font-normal font-['Outfit'] leading-loose tracking-wide ">
            with
          </span>
          <span class="text-black text-2xl font-bold font-['Outfit'] leading-loose tracking-wide pl-1">
            WordTale!
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
