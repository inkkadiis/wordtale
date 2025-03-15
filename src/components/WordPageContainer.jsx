export default function WordPageContainer({ children }) {
  return (
    <div className="relative min-w-full bg-white rounded-tl-3xl rounded-bl-3xl p-2 shadow-xl">
      {children}
    </div>
  );
}
