import { Right } from "./Icon";

export default function LibraryCard() {
  return (
    <div className="rounded bg-white px-3 py-2 flex justify-between gap-6">
      <div className="flex-1 max-w-56">
        <h2 className="text-point">Apple</h2>
        <p>To leave something behind or give up completely</p>
      </div>
      <button type="button">
        <Right />
      </button>
    </div>
  );
}
