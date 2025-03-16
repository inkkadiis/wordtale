import WandIcon from "./WandIcon";

export default function SearchBar() {
  return (
    <div class="nav-shadow max-w-md rounded-[32px] shadow-md p-2 bg-gradient-to-b from-point to-yellow">
      {/* 이거 라운드 변경이 왜 안되죠..?*/}
      <div class="rounded-[30px] p-6 bg-white flex justify-between">
        <input
          type="text"
          className="outline-none focus:ring-0 focus:border-transparent"
          placeholder="test"
        />
        <WandIcon />
      </div>
      <div></div>
    </div>
  );
}
