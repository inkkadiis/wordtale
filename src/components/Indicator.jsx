export default function Indicator({ index }) {
  console.log(index);
  return (
    <div className="w-8 inline-flex justify-between items-center">
      <div
        className={`w-2 h-2 rounded-full ${
          index === 0 ? "bg-point" : "bg-off-gray"
        }`}
      />
      <div
        className={`w-2 h-2 rounded-full ${
          index === 1 ? "bg-point" : "bg-off-gray"
        }`}
      />
    </div>
  );
}
