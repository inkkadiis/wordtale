const Letter = ({ children, onClick, isSelected }) => {
  return (
    <button
      key={children}
      className={`font__outfit font-semibold rounded-md transition ${
        isSelected ? "text-point" : "text-sub"
      }`}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
};

export { Letter };
