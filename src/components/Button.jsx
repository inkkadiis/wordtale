const colors = {
  point: "bg-point text-white",
  outlinePoint: "text-point outline-[2px]",
  sub: "bg-sub text-white",
  oulineSub: "text-sub outline-[2px]",
};

const type = {
  full: "w-full flex justify-center rounded-[22px] px-8 py-4",
  fit: "inline-flex justify-center rounded-[15px] px-6 py-2",
};

// 내용물, 색, 함수 순으로 넣는다(안넣어도 됨)
export default function Button({ children, color, size, onClick }) {
  return (
    <button
      type="button"
      className={`${type[size]} ${colors[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
