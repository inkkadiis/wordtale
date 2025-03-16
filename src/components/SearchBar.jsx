import WandIcon from "./WandIcon";

export default function SearchBar() {
  return (
    <div class="max-w-md rounded-full p-2 bg-gradient-to-b from-point to-yellow">
      <div class="rounded-full p-6 bg-white flex justify-between">
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
