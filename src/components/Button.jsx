const colors = {
  point: "bg-point text-white",
  outlinePoint: "text-point outline-[2px]",
  sub: "bg-sub text-white",
  oulineSub: "text-sub outline-[2px]",
};

const type = {
  full: "w-full max-w-xs flex  justify-center rounded-[17px] px-8 py-3",
  fit: "inline-flex justify-center rounded-[15px] px-6 py-2",
};

/* Button 사용하는 방법 
  <Button color="point" size="full">
    point big Button
  </Button>
  <Button color="outlinePoint" size="fit">
    outline Point small Button
  </Button>
  <Button color="sub" size="fit">
    sub small Button
  </Button>
  <Button color="oulineSub" size="full">
    outline Sub Big Button
  </Button> 
*/

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
