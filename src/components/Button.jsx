const colors = {
  point: "bg-point text-white",
  outlinePoint: "text-point outline-[2px]",
  sub: "bg-sub text-white",
  oulineSub: "text-sub outline-[2px]",
};

const type = {
  big: "w-full flex justify-center",
  small: "inline-flex justify-center",
};

// 내용물, 색, 함수 순으로 넣는다(안넣어도 됨)
export default function Button({ children, color, size, onClick }) {
  return (
    <button
      type="button"
      className={`${type[size]} rounded-md px-4 py-1.5 font-bold ${colors[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
