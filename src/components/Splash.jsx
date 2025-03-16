export default function Splash() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-point">
      <h1 className="self-stretch text-center justify-center text-white text-5xl font-bold  leading-[65px] tracking-wide">
        WordTale
      </h1>
      <div className="self-stretch px-2.5 inline-flex justify-center items-center gap-1">
        <h1 className="text-center justify-center text-main text-xl  leading-loose tracking-tight">
          Bring words to life
        </h1>
        <h1 className="bg-gradient-to-r from-[#8359FF] to-[#FF2194] bg-clip-text text-transparent text-xl font-bold">
          with AI.
        </h1>
      </div>
    </div>
  );
}
