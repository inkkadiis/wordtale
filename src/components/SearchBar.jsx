import WandIcon from "./WandIcon";

export default function SearchBar() {
  return (
    <div class="nav-shadow max-w-md rounded-[32px] self-stretch shadow-md p-2 bg-gradient-to-b from-point to-yellow">
      
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
