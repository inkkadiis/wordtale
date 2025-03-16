export function WordPageContainerLeft({ children }) {
  return (
    <div className="relative min-w-full bg-white rounded-tl-3xl rounded-bl-3xl p-2 shadow-xl">
      {children}
    </div>
  );
}

export function WordPageContainerRight({ children }) {
  return (
    <div className="relative min-w-full bg-white rounded-tr-3xl rounded-br-3xl p-2 shadow-xl">
      {children}
    </div>
  );
}
