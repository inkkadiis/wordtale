import Button from "../../components/Button";

export default function SignIn() {
  return (
    <div className="w-full h-full flex flex-col self-stretch justify-center items-center">
      <div className="flex flex-col justify-center items-center pb-12 ">
        <div className=" flex flex-col  items-center gap-3 ">
          <h1 className=" text-center justify-center text-black text-4xl font-bold  leading-[40px] tracking-wide">
            Welcome to
            <br />
            WordTale
          </h1>
          <div className="flex text-center justify-center ">
            <h1 class="text-black text-l font-normal font-['Outfit'] leading-loose tracking-tight ">
              Bring words to life
            </h1>
            <span class="text-[#ff8340] text-l font-normal font-['Outfit'] leading-loose tracking-tight p-[2px]">
              {" "}
            </span>
            <h1 class="bg-gradient-to-r from-[#FF8341] to-[#EA3A9E] bg-clip-text text-transparent text-l  font-semibold  leading-loose tracking-tight">
              with AI.
            </h1>
          </div>
        </div>
      </div>

      <Button color="outlinePoint" size="full">
        <img
          src="../public/Google.svg"
          alt="Google Logo"
          className="w-5 h-5 inline-block self-center mr-3"
        />{" "}
        <h1 className="font-semibold">Sign in with Google</h1>
      </Button>
    </div>
  );
}
