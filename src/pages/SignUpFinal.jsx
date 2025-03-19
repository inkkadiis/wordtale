import Button from "../components/Button";
import BookImage from "../components/BookImage";

export default function SignUpFinal() {
  return (
    <div className="size-full max-x-md flex flex-col justify-center items-center gap-9">
      <div className="flex flex-col gap-6">
        <h1 className=" text-center justify-center text-point text-3xl font-semibold  leading-[38px] tracking-wide">
          You're all set to
          <br />
          explore words in a
          <br />
          whole new way.
        </h1>
        <BookImage />
      </div>
      <div className="flex flex-col self-stretch justify-center items-center gap-4">
        <Button color="point" size="full">
          <h1 className="text-xl font-medium">Start Searching</h1>
        </Button>
        <h1 className="text-sub">and see what AI creates!</h1>
      </div>
    </div>
  );
}
